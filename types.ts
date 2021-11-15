import { User } from "next-auth";

export interface AuthenticatedUser extends User {
  access_token?: string;
  refreshToken?: string;
}
