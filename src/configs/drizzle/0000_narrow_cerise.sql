CREATE TYPE "public"."provider" AS ENUM('google', 'apple', 'facebook');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('USER', 'ADMIN');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('ACTIVE', 'INACTIVE', 'BLOCKED');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar,
	"country_code" varchar DEFAULT '+91',
	"mobile" varchar,
	"password" varchar NOT NULL,
	"is_email_verified" boolean DEFAULT false,
	"is_mobile_verified" boolean DEFAULT false,
	"isVerified" boolean DEFAULT false,
	"otp" varchar,
	"otp_expire" timestamp NOT NULL,
	"is_otp_verified" boolean DEFAULT false,
	"role" "roles" DEFAULT 'USER',
	"status" "status" DEFAULT 'ACTIVE',
	"provider" "provider",
	"socialId" varchar,
	"isSocialLogin" boolean DEFAULT false,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "users_socialId_unique" UNIQUE("socialId")
);
