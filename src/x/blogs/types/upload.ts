import { t, Elysia } from "elysia";


export const getUploadParams = t.Object({
    file: t.File({ type: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/quicktime'],
        maxSize: '50m', // 50MB limit
      }),
  });
  
  
  export const uploadModelType = new Elysia().model({
    "upload.body": getUploadParams,
    "upload.response": t.Object({
      success: t.Boolean(),
      message: t.String(),
      url: t.Optional(t.String()),
    }),
  });
  

  export type contactParams = typeof getUploadParams.static;