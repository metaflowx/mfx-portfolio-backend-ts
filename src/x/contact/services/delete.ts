import { StringChunk } from "drizzle-orm";
import contactRepository from "../repositories";

export const deletecontactService = async (id: string) => {
  const deletedcontact = await contactRepository.delete(id);
  if (!deletedcontact) throw new Error("Delete failed or contact not found.");
  return deletedcontact;
};
