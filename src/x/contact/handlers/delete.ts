import { Elysia } from "elysia";
import { contactModelType } from "../types/createContact";
import { deletecontactService } from "../services/delete";

export const deletecontact = new Elysia()
  .use(contactModelType)
  .delete("/deletecontact", async ({query, set }) => {
    try {
        const{id} = query
      const deleted = await deletecontactService(id);
      return { success: true, message: "contact deleted", data: deleted };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to delete contact", error };
    }
  }, 
    
);
