// import { verifyToken } from "../utils";
// import { Elysia } from "elysia";

// /**
//  * Authentication middleware to verify JWT.
//  */
// export const authMiddleware = new Elysia().use(async ({ set, headers }) => {
//   const authHeader = headers["authorization"];

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     set.status = 401;
//     return { success: false, message: "Unauthorized: No token provided" };
//   }

//   const token = authHeader.split(" ")[1]; // Extract token

//   try {
//     const decoded = await verifyToken(token);
//     if (!decoded) {
//       set.status = 401;
//       return { success: false, message: "Unauthorized: Invalid token" };
//     }

//     return { success: true, user: decoded }; // Attach user data
//   } catch (error) {
//     set.status = 401;
//     return { success: false, message: "Unauthorized: Token verification failed" };
//   }
// });
