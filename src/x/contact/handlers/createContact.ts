import { Elysia } from "elysia";
import { contactModelType } from "../types/createContact";
import { createcontactService } from "../services/createContact";
import { ConsoleLogWriter } from "drizzle-orm";

export const createcontact = new Elysia().use(contactModelType).post(
  "/createcontact",
  async ({ body, set }) => {
    console.log("======5====>", body);

    try {
      const contact = await createcontactService(body);
      console.log("======50====>");
      set.status = 200;
      return {
        success: true,
        message: "contact created successfully",
        data: contact,
      };
    } catch (error) {
      set.status = 500;
      return {
        success: false,
        message: "contact creation failed",
        error,
      };
    }
  },
  {
    body: "createContact.body",
    response: {},
  }
);
