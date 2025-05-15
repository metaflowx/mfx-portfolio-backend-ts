import { Elysia } from "elysia";
import { contactModelType } from "../types/createContact";
import { getAllcontactService} from "../services/getAll";

export const getAllcontacts = new Elysia()
  .use(contactModelType)
  .get("/getAllcontacts", async ({ query, set }) => {
    try {
      const contacts = await getAllcontactService(query);
      return { success: true, data: contacts };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to get contacts", error };
    }
  }, {
    
  });