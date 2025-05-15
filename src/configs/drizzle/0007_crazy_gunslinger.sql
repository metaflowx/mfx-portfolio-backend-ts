CREATE TABLE "contact" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(25) NOT NULL,
	"fullName" varchar(25) NOT NULL,
	"email" varchar(25) NOT NULL,
	"phone" varchar(25) NOT NULL,
	"whatappNumber" varchar(25),
	"querry" varchar(1000) NOT NULL,
	"projectCategory" varchar(255) NOT NULL
);
