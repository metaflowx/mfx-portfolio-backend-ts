import Elysia from "elysia";
import { deactivateModelType } from "../types/deactivate";
import { deactivateAdminService } from "../services/deactivate";

export const deactivateAdmin = new Elysia()
  .use(deactivateModelType)
  .post("/deactivate", async ({ query, set }) => {
    try {
      const { email, status } = query;
      /// Validate adminId
      if (!email || !status) {
        set.status = 400;
        return {
          success: false,
          message: "email and status is required in query parameters",
        };
      }
      const statusMessage =
        status === "INACTIVE"
          ? "Admin deactivated Successfully"
          : "Admin activated Successfully";

        console.log("=====>", query);

      const profile = await deactivateAdminService(email, status);
      console.log("=====>profile", profile);

      set.status = 200;
      return {
        success: true,
        message: statusMessage,
        data: profile,
      };
    } catch (error) {
      set.status = 404;
      return {
        success: false,
        message: "Admin status failed",
        error: error,
      };
    }
  });
