import Elysia from "elysia";
import { v2 as cloudinary } from "cloudinary";
import { cors } from "@elysiajs/cors";
import { uploadModelType } from "../types/upload";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file: File, userId?: string) => {
  const isImage = file.type.startsWith("image/");

  if (!isImage) {
    throw new Error("Unsupported file type");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64String = buffer.toString("base64");
  const dataUri = `data:${file.type};base64,${base64String}`;

  const uploadOptions = {
    resource_type: "image" as const,
    folder: userId ? `user_uploads/${userId}` : "anonymous_uploads",
    allowed_formats: ["jpg", "png"],
    transformation: { quality: "auto:good" },
  };

  return await cloudinary.uploader.upload(dataUri, uploadOptions);
};

export const uploadImage = new Elysia()
  .use(cors())
  .use(uploadModelType)
  .post("/upload", async ({ body, set }) => {
    try {
      const file = body.file;

      if (!file) {
        set.status = 400;
        return { error: "No file provided" };
      }

      const result = await uploadToCloudinary(file);

      return {
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        width: result.width,
        height: result.height,
      };
    } catch (error: any) {
      set.status = 500;
      return { error: "Upload failed", details: error.message };
    }
  });
