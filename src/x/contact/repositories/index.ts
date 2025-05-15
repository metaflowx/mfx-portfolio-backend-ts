import { db } from "../../../databases/postgres/schema";
import { contact} from "../../../databases/postgres/schema/contact"; 
import { eq } from "drizzle-orm";

export default class contactRepository {
  static async create(contactData: typeof contact.$inferInsert) {
    try {
      console.log("bdkwbkdbq=>",contactData);
      
      const result = await db.insert(contact).values(contactData).returning();
      return result[0]; // consistent destructuring
    } catch (error) {
      console.error("Error creating contact:", error);
      throw new Error("Failed to create contact");
    }
  }

  static async readOne(id: string) {
    try {
      const result = await db
        .select()
        .from(contact)
        .where(eq(contact.id, id))
        .limit(1);

      return result[0] || null;
    } catch (error) {
      console.error("Error fetching contact:", error);
      throw new Error("Failed to fetch contact");
    }
  }

  static async readAll() {
    try {
      return await db.select().from(contact);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw new Error("Failed to fetch contacts");
    }
  }

  static async readAllPaginated(limit: number, offset: number) {
    try {
      return await db.select().from(contact).limit(limit).offset(offset);
    } catch (error) {
      console.error("Error fetching paginated contacts:", error);
      throw new Error("Failed to fetch contacts");
    }
  }

  static async update(id: string, updateData: Partial<typeof contact.$inferInsert>) {
    try {
      const result = await db
        .update(contact)
        .set(updateData)
        .where(eq(contact.id, id))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error updating contact:", error);
      throw new Error("Failed to update contact");
    }
  }

  static async delete(id: string) {
    try {
      const result = await db
        .delete(contact)
        .where(eq(contact.id, id))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error deleting contact:", error);
      throw new Error("Failed to delete contact");
    }
  }
}
