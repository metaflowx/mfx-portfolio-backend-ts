import contactRepository from "../repositories";

export const createcontactService = async (contactData: any) => {
  const requiredFields = [
    "yourName",
    "email",
    "phone",
    "whatappNumber",
    "budget",
    "projectCategory",
    "timeLine",
    "discription",
  ];
  for (const field of requiredFields) {
    if (contactData[field] === undefined || contactData[field] === null) {
      throw new Error(`${field} is required.`);
    }
  }

  const newcontact = await contactRepository.create(contactData);

  if (!newcontact) throw new Error("contact creation failed.");

  return newcontact;
};
