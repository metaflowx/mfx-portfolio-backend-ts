import { db } from "../../../databases/postgres/schema/index";
import { users } from "../../../databases/postgres/schema/users";
import { eq, or, and, sql } from "drizzle-orm";

export default class UserRepository {
    static async create(userData: any) {
        try {
            const [newUser] = await db.insert(users).values(userData).returning();
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
                .from(users)
                .where(
                    email && mobile
                        ? or(eq(users.email, email), eq(users.mobile, mobile))      /// If both are provided, check either
                        : email
                        ? eq(users.email, email)    /// If only email
                        : eq(users.mobile, mobile!)     /// If only mobile (mobile is non-null here)
                )
                .limit(1);

            const [user] = await query; 
            return user || null; 
        } catch (error) {
            console.error("Error fetching user:", error);
            throw new Error("Failed to fetch user");
        }
    }

    static async readBySocialId(socialId: string, provider: string) {
        try {
            const user = await db
                .select()
                .from(users)
                .where(and(eq(users.socialId, socialId), eq(users.provider, sql`${provider}::roles`)))
                .limit(1);
    
            return user.length ? user[0] : null;
        } catch (error) {
            console.error("Error fetching social user:", error);
            throw new Error("Failed to fetch social user");
        }
    }

    static async readList() {

    }


    static async update(userId: string, updateData: Partial<typeof users.$inferInsert>) {
        try {
            const [updatedUser] = await db
                .update(users)
                .set(updateData)
                .where(eq(users.id, userId))
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
                .from(users)
                .where(and(eq(users.id, userId), eq(users.status, "ACTIVE")))
                .limit(1);
    
            const [user] = await query;
    
            return user || null;
        } catch (error) {
            console.error("Error fetching user by ID:", error);
            throw new Error("Failed to fetch active user.");
        }
    }

    static async delete() {

    }
}