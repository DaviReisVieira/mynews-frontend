import jwt from "jsonwebtoken";

export namespace JwtUtils {
  export const isJwtExpired = (token: string) => {
    const currentTime = Math.round(Date.now() / 1000 + 60);
    const decoded: any = jwt.decode(token);

    console.log(`Current time + 60 seconds: ${new Date(currentTime * 1000)}`);
    console.log(`JWT Token lifetime: ${new Date(decoded["exp"] * 1000)}`);

    if (decoded["exp"]) {
      const adjustedExpiry = decoded["exp"];

      if (adjustedExpiry < currentTime) {
        console.log("JWT Token expired");
        return true;
      }

      console.log("JWT Token has not expired yet.");
      return false;
    }

    console.log('JWT Token["exp"] does not exist');
    return true;
  };
}
