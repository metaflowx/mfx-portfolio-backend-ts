import contactRepository from "../repositories";

export const createcontactService = async (contactData: any) => {

  const requiredFields = [
    "name",
    "fullName",
    "email",
    "phone",
    "whatappNumber",
    "querry",
    "projectCategory",
  ];
  console.log("=====>jdohdo",contactData);
  

  for (const field of requiredFields) {
    if (contactData[field] === undefined || contactData[field] === null) {
      throw new Error(`${field} is required.`);
    }
  }
  
  console.log("=======>20",contactData);
  

  
  const newcontact = await contactRepository.create(contactData);

  if (!newcontact) throw new Error("contact creation failed.");

  return newcontact;
};
