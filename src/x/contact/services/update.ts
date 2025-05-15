import contactRepository from "../repositories";

export const updatecontactService = async (id: string, updateData: any) => {
  

  const updatedcontact = await contactRepository.update(id, updateData);
  

  if (!updatedcontact) throw new Error("Update failed or contact not found.");
  return updatedcontact;
};
