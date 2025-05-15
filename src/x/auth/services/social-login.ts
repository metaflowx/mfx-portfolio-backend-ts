import UserRepository from "../repositories";
import { OAuth2Client } from "google-auth-library";
const googleClient = new OAuth2Client(Bun.env.GOOGLE_CLIENT_ID);
import appleSigninAuth from "apple-signin-auth";
import { signToken } from "../../../utils";

export const socialLoginService = async (socialLoginData: any) => {
    const { token, provider } = socialLoginData;
    if (!token || !provider) throw new Error("Token and provider are required.");

    let socialId: string, email: string | null = null, name: string | null = null;

    if (provider === "google") {
        /// Verify Google Token
        const ticket = await googleClient.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload) throw new Error("Invalid Google token.");

        socialId = payload.sub;
        email = payload.email || null;
        name = payload.name || null;
    } else if (provider === "apple") {
        /// Verify Apple Token
        const appleUser = await appleSigninAuth.verifyIdToken(token, {
          audience: process.env.APPLE_CLIENT_ID,
        });

        socialId = appleUser.sub; 
        email = appleUser.email || null;
        name = null; 
      } else {
        throw new Error("Unsupported provider.");
      } 
      /// Check if user exists
      let existingUser = await UserRepository.readBySocialId(socialId, provider);

      if (!existingUser) {
        // Create a new user if not found
        existingUser = await UserRepository.create({
          name,
          email,
          provider,
          socialId,
          isSocialLogin: true,
          isEmailVerified: !!email, 
        });
        
          /// Generate JWT token
          const token = await signToken({ id: existingUser.id, role: existingUser.role });
      
        return { existingUser, token};
    }


};
