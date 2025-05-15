import { db } from "../../../databases/postgres/schema/index";
import { admin} from "../../../databases/postgres/schema/admin";
import { eq, or, and, sql } from "drizzle-orm";

export default class AdminRepository {
  static async create(userData: any) {
    try {
      const [newUser] = await db.insert(admin).values(userData).returning();
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user");
    }
  }

  static async readOne(email?: string | null, mobile?: string | null) {
    /// If both are empty/null, return null
    if (!email && !mobile) return null;

    try {
      const query = db
        .select()
        .from(admin)
        .where(
          email && mobile
            ? or(eq(admin.email, email), eq(admin.mobile, mobile))
            : email
            ? eq(admin.email, email)
            : eq(admin.mobile, mobile!)
        )
        .limit(1);

      const [user] = await query;

      return user || null;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Failed to fetch user");
    }
  }

  static async readAll() {
      try {
        return await db.select().from(admin);
      } catch (error) {
        console.error("Error fetching admin:", error);
        throw new Error("Failed to fetch admin");
      }
    }



    static async deactivate(_email: string, statusType: string) {
        const allowedStatuses = ['ACTIVE', 'INACTIVE'];
    
       
        if (!allowedStatuses.includes(statusType)) {
            throw new Error(`Invalid status type: ${statusType}. Allowed values are ${allowedStatuses.join(", ")}`);
        }
    
        try {
            const [updatedProfile] = await db
                .update(admin)
                .set({ status: statusType })
                .where(eq(admin.email, _email))
                .returning();
    
            return updatedProfile || null;
        } catch (error) {
            console.error("Error deactivating profile:", error);
            throw new Error("Failed to deactivate profile");
        }
    }
    

  static async update(
    userId: string,
    updateData: Partial<typeof admin.$inferInsert>
  ) {
    try {
      const [updatedUser] = await db
        .update(admin)
        .set(updateData)
        .where(eq(admin.id, userId))
        .returning();

      return updatedUser || null;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Failed to update user");
    }
  }

  static async readOneByID(userId: string) {
    if (!userId) {
      throw new Error("User ID is required.");
    }

    try {
      const query = db
        .select()
        .from(admin)
        .where(and(eq(admin.id, userId), eq(admin.status, "ACTIVE")))
        .limit(1);

      const [user] = await query;

      return user || null;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw new Error("Failed to fetch active user.");
    }
  }

  static async delete() {}
}
