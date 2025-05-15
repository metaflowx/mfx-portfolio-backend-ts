import { db } from "../../../databases/postgres/schema"; // ✅ Make sure this exports `db`
import { blog} from "../../../databases/postgres/schema/blog"; // ✅ This should export the table only
import { eq } from "drizzle-orm";

export default class BlogRepository {
  static async create(blogData: typeof blog.$inferInsert) {
    try {
      const result = await db.insert(blog).values(blogData).returning();
      return result[0]; // consistent destructuring
    } catch (error) {
      console.error("Error creating blog:", error);
      throw new Error("Failed to create blog");
    }
  }

  static async readOne(id: string) {
    try {
      const result = await db
        .select()
        .from(blog)
        .where(eq(blog.id, id))
        .limit(1);

      return result[0] || null;
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw new Error("Failed to fetch blog");
    }
  }

  static async readAll() {
    try {
      return await db.select().from(blog);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw new Error("Failed to fetch blogs");
    }
  }

  static async readAllPaginated(limit: number, offset: number) {
    try {
      return await db.select().from(blog).limit(limit).offset(offset);
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
      throw new Error("Failed to fetch blogs");
    }
  }

  static async update(id: string, updateData: Partial<typeof blog.$inferInsert>) {
    try {
      const result = await db
        .update(blog)
        .set(updateData)
        .where(eq(blog.id, id))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error updating blog:", error);
      throw new Error("Failed to update blog");
    }
  }

  static async delete(id: string) {
    try {
      const result = await db
        .delete(blog)
        .where(eq(blog.id, id))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error deleting blog:", error);
      throw new Error("Failed to delete blog");
    }
  }
}
