import { Elysia } from 'elysia';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiOptions } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
  file: File,
  userId?: string
) => {
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');

  if (!isImage && !isVideo) {
    throw new Error('Unsupported file type');
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64String = buffer.toString('base64');
  const dataUri = `data:${file.type};base64,${base64String}`;

  const uploadOptions: UploadApiOptions = {
    resource_type: isVideo ? 'video' : 'image',
    folder: userId ? `user_uploads/${userId}` : 'anonymous_uploads',
    allowed_formats: isVideo ? ['mp4', 'mov', 'avi'] : ['jpg', 'png', 'webp', 'gif'],
    transformation: isImage ? { quality: 'auto:good' } : undefined,
  };

  return await cloudinary.uploader.upload(dataUri, uploadOptions);
};

export const deleteFromCloudinary = async (
  publicId: string,
  resourceType: 'image' | 'video'
) => {
  return await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
};
