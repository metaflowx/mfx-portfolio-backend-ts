import { Elysia } from "elysia";
import { contactModelType } from "../types/createContact";
import { getcontactService } from "../services/getContact";

export const getcontact = new Elysia().use(contactModelType).get(
  "/getcontact",
  async ({ query, set }) => {
    try {
      const { id } = query;

      const contact = await getcontactService(id);

      if (!contact) {
        set.status = 404;
        return { success: false, message: "contact not found" };
      }
      return { success: true, data: contact };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to get contact", error };
    }
  },
  {}
);
