import { Elysia, t } from "elysia";
import { contactModelTypeUpdate } from "../types/update";
import { updatecontactService } from "../services/update";

export const updatecontact = new Elysia().use(contactModelTypeUpdate).put(
  "/updatecontact",
  async ({ query, body, set }) => {
    try {
      const { id } = query;
      const updatedcontact = await updatecontactService(id, body);
      return {
        success: true,
        message: "contact updated successfully",
        data: updatedcontact,
      };
    } catch (error) {
      set.status = 400;
      return {
        success: false,
        message: "Failed to update contact",
        error,
      };
    }
  },
  {
    body: "updatecontact.body",
    response: {},
  }
);
