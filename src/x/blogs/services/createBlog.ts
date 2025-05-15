

import BlogRepository from "../repositories";

export const createBlogService = async (blogData: any) => {
  
  const requiredFields = [
    "image",
    "heading",
    "author",
    "published",
    "category",
    "paragraph",
    "images",
    "headings",
    "paragraphs",
    "tags",
  ];

  for (const field of requiredFields) {
    if (!blogData[field]) {
      throw new Error(`${field} is required.`);
    }
  }


  let published = new Date(blogData.published);

  if (isNaN(published.getTime())) {
    throw new Error(
      "Invalid date format for 'published'. Expected a valid date string."
    );
  }


  const newBlog = await BlogRepository.create({
    ...blogData,
    published, 
  });

  if (!newBlog) throw new Error("Blog creation failed.");

  return newBlog;
};
