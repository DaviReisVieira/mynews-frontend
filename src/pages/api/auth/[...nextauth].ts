import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { Session } from "next-auth";
import { NextAuthOptions } from "next-auth";
import axios from "axios";
import { JwtUtils } from "../../../constants/Utils";
import Google from "next-auth/providers/google";

namespace NextAuthUtils {
  export const refreshToken = async function (refreshToken: any) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE}/api/auth/token/refresh/`,
        {
          refresh: refreshToken,
        }
      );

      const { access, refresh } = response.data;
      // still within this block, return true
      return [access, refresh];
    } catch {
      return [null, null];
    }
  };
}

const settings: NextAuthOptions = {
  secret: process.env.SESSION_SECRET,
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  debug: process.env.NODE_ENV === "development",

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }): Promise<any> {
      // user just signed in
      if (user) {
        // may have to switch it up a bit for other providers
        if (account?.provider === "google") {
          // extract these two tokens
          const { access_token: accessToken, idToken } = account;

          // make a POST request to the DRF backend
          try {
            const response = await axios.post(
              // tip: use a seperate .ts file or json file to store such URL endpoints
              `${process.env.NEXT_PUBLIC_BACKEND_API_BASE}/api/social/login/google/`,
              {
                access_token: accessToken, // note the differences in key and value variable names
                id_token: idToken,
              }
            );

            // extract the returned token from the DRF backend and add it to the `user` object
            const { access_token, refresh_token } = response.data;
            // reform the `token` object from the access token we appended to the `user` object
            token = {
              ...token,
              accessToken: access_token,
              refreshToken: refresh_token,
            };

            return token;
          } catch (error) {
            return null;
          }
        }
      }

      // user was signed in previously, we want to check if the token needs refreshing
      // token has been invalidated, try refreshing it
      if (JwtUtils.isJwtExpired(token.accessToken as string)) {
        const [newAccessToken, newRefreshToken] =
          await NextAuthUtils.refreshToken(token.refreshToken);

        if (newAccessToken && newRefreshToken) {
          token = {
            ...token,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
          };

          return token;
        }

        // unable to refresh tokens from DRF backend, invalidate the token
        return {
          ...token,
          exp: 0,
        };
      }

      // token valid
      return token;
    },

    async session({ session, token, user }): Promise<Session> {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const NextAuthDefault = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, settings);

export default NextAuthDefault;
