import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import * as fs from 'fs';
import * as path from 'path'; 

/// Load private key
const privateKeyPath = path.join(__dirname, '../scripts/AccessTokenPrivateKey.pem');
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');



/// Initialize Elysia app with the JWT plugin
const app = new Elysia()
  .use(
    jwt({
      secret: privateKey,
      exp: "7d",
      algorithm: "HS256",
    })
  );

const { sign, verify } = app.decorator.jwt;

export const signToken = async (payload: any) => {
  return await sign(payload);
};

export const verifyToken = async (token: string) => {
  try {
    const decoded = await verify(token);

    /// Check if `exp` exists and has expired
    if (!decoded || typeof decoded !== "object" || !decoded.exp) {
      throw new Error("Invalid token.");
    }

    const currentTime = Math.floor(Date.now() / 1000); /// Current time in seconds
    if (decoded.exp < currentTime) {
      throw new Error("Token has expired");
    }

    return decoded; /// Token is valid
  } catch (error:any) {
    console.error("Token verification failed:", error.message);
    return null;
  }
};