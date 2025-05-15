import contactRepository from "../repositories";

export const getAllcontactService = async (query: Record<string, string>) => {
  return await contactRepository.readAll();
};