import { createcontact } from "./createContact";
import { getcontact } from "./getContact";
import { getAllcontacts } from "./getAll";
import { updatecontact } from "./update";
import { deletecontact } from "./delete";
import Elysia from "elysia";

const xcontactHandler = new Elysia({
  prefix: "/contact",
  tags: ["contact Module"],
})
  .use(createcontact)
  .use(getcontact)
  .use(getAllcontacts)
  .use(deletecontact)
  .use(updatecontact);

export default xcontactHandler;
