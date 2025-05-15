import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import initX from "./initX";
import Bun from "bun";

const PORT = Bun.env.PORT || 5050;
const HOST = Bun.env.HOST || "localhost";

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      path: "/swagger",
      documentation: {
        info: {
          title: "Metaflowx education API",
          version: "1.0.0",
          description: "Metaflowx education API Documentation",
        },
        servers: [
          {
            url: `${HOST === "localhost" ? "http" : "https"}://${HOST}:${PORT}`,
            description: "Local Server",
          },
        ],
        components: {
          securitySchemes: {
            BearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT", // Optional: Specifies the format
            },
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
    })
  )
  .get(
    "/health",
    ({ set }) => {
      set.status = 200;
      return {
        success: true,
        message: "Metaflowx education API Server is Healthy",
      };
    },
    {
      tags: ["Health"],
    }
  )
  .use(initX)
  .listen(PORT);

console.log(
  `🦊 Metaflowx education API is running at ${app.server?.hostname}:${app.server?.port}`
);
