import contactRepository from "../repositories";
import { validate as isUuid } from 'uuid';

export const getcontactService = async (id: string) => {
  if (!isUuid(id)) {
    throw new Error("Invalid id: Must be a valid UUID.");
  }


  const contact = await contactRepository.readOne(id);
  if (!contact) throw new Error("contact not found.");

  return contact;
};
