import contactRepository from "../repositories";

export const createContactService = async (contactData: any) => {
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

  const missingFields = requiredFields.filter((field) => {
    const value = contactData[field];
    return (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "")
    );
  });

  if (missingFields.length > 0) {
    throw new Error(
      `Please fill all required fields: ${missingFields.join(", ")}.`
    );
  }

  const newContact = await contactRepository.create(contactData);

  if (!newContact) throw new Error("Contact creation failed.");

  return newContact;
};
