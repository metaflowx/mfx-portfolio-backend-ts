import AdminRepository from "../repositories";
import { validate as isUuid } from 'uuid';

export const getAdminService = async (id: string) => {
  if (!isUuid(id)) {
    throw new Error("Invalid id: Must be a valid UUID.");
  }


  const admin = await AdminRepository.readOneByID(id);
  if (!admin) throw new Error("Amin not found.");

  return admin;
};
