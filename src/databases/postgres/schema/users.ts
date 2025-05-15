import { boolean, integer, pgEnum, pgTable, varchar , timestamp, uuid } from "drizzle-orm/pg-core";
import timestamps from "./common";

export const userRolesEnum = pgEnum("roles", ["USER", "ADMIN"]);
export const userStatusEnum =  pgEnum("status", ["ACTIVE", "INACTIVE", "BLOCKED"]);
export const authProvidersEnum = pgEnum("provider", ["google", "apple", "facebook"]);

export const users = pgTable('users', {
    id: uuid().primaryKey().defaultRandom(),
    email: varchar(),
    country_code:varchar().default('+91'),
    mobile: varchar(),
    password: varchar().notNull(),
    isEmailVerified: boolean("is_email_verified").default(false),
    isVerified: boolean("isVerified").default(false),
    otp: varchar("otp"),
    otpExpire: timestamp("otp_expire").notNull(), /// OTP expiration time
    isOtpVerified: boolean("is_otp_verified").default(false),  
    role: userRolesEnum().default('USER'),
    status: userStatusEnum().default('ACTIVE'),
    provider: authProvidersEnum(),
    socialId: varchar().unique(),
    isSocialLogin: boolean().default(false),
    ...timestamps
  })
  