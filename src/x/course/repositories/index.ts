import { db } from "../../../databases/postgres/schema";
import { courses } from "../../../databases/postgres/schema/course"
import { eq, sql } from "drizzle-orm";

export default class CourseRepository {
  static async create(courseData: any) {
    const [newCourse] = await db.insert(courses).values(courseData).returning();
    return newCourse;
  }

  static async readOne(id: string) {
    const [course] = await db.select().from(courses).where(eq(courses.id, id)).limit(1);
    return course || null;
  }

  static async readAll() {
    return await db.select().from(courses);
  }

  static async readAllPaginated(limit: number, offset: number) {
    return await db.select().from(courses).limit(limit).offset(offset);
  }

  static async countAll() {
    const result = await db.select({ count: sql<number>`COUNT(*)` }).from(courses);
    return result[0]?.count || 0;
  }

  static async update(id: string, updateData: Partial<typeof courses.$inferInsert>) {
    const [updated] = await db.update(courses).set(updateData).where(eq(courses.id, id)).returning();
    return updated || null;
  }

  static async delete(id: string) {
    const [deleted] = await db.delete(courses).where(eq(courses.id, id)).returning();
    return deleted || null;
  }
}
export function createCourse(data: any) {
  throw new Error("Function not implemented.");
}

export function getCourses() {
  throw new Error("Function not implemented.");
}

export function getCourseById(id: string) {
  throw new Error("Function not implemented.");
}

export function updateCourse(id: string, data: any) {
  throw new Error("Function not implemented.");
}

export function deleteCourse(id: string) {
  throw new Error("Function not implemented.");
}

