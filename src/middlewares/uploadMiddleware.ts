// import { Elysia } from 'elysia';
// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadPlugin = new Elysia().post('/upload', async ({ body, set }) => {
//   try {
//     const formData = body as FormData;

//     const title = formData.get("title") as string;
//     const type = formData.get("type") as string;
//     const description = formData.get("description") as string;
//     const points = Number(formData.get("points") || formData.get("point"));
//     const image = formData.get("image");

//     if (!title || !type || !description || !points || !(image instanceof File)) {
//       set.status = 400;
//       return { error: "All fields and image file are required." };
//     }

//     const buffer = Buffer.from(await image.arrayBuffer());

//     const uploadedImage: any = await new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_stream({ folder: "uploads" }, (error, result) => {
//         if (error) return reject(error);
//         resolve(result);
//       }).end(buffer);
//     });

//     return {
//       message: "Upload successful",
//       fields: { title, type, description, points },
//       filePath: uploadedImage.secure_url,
//     };
//   } catch (error) {
//     console.error("Upload Error:", error);
//     set.status = 500;
//     return { error: "Failed to process file upload." };
//   }
// });

// export default uploadPlugin;
