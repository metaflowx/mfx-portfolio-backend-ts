import contactRepository from "../repositories";

export const updatecontactService = async (id: string, updateData: any) => {
  console.log("1", updateData);

  const updatedcontact = await contactRepository.update(id, updateData);
  console.log("===7=>",updateData);

  if (!updatedcontact) throw new Error("Update failed or contact not found.");
  return updatedcontact;
};
