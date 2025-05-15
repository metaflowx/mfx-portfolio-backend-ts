CREATE TABLE "courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"coverPhoto" varchar(255) NOT NULL,
	"title" varchar(25) NOT NULL,
	"description" varchar(255) NOT NULL,
	"newPrice" varchar(255) NOT NULL,
	"oldPrice" varchar(255) NOT NULL,
	"rating" varchar(25) NOT NULL,
	"review" varchar(255) NOT NULL,
	"semester" varchar(25) NOT NULL,
	"year" varchar(25) NOT NULL,
	"seller" varchar(255) NOT NULL,
	"statusApproval" varchar(25) DEFAULT 'false' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
