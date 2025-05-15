import AminRepository from "../repositories";

export const getAllAdminService = async (query: Record<string, string>) => {
  return await AminRepository.readAll();
};