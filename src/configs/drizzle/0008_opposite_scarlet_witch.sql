CREATE TABLE "admin" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar,
	"mobile" varchar,
	"password" varchar NOT NULL,
	"role" varchar DEFAULT 'ADMIN',
	"status" "status" DEFAULT 'ACTIVE',
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "admin_email_unique" UNIQUE("email"),
	CONSTRAINT "admin_mobile_unique" UNIQUE("mobile")
);
