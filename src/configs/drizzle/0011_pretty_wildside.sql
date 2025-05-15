ALTER TABLE "contact" ALTER COLUMN "email" SET DATA TYPE varchar(30);--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "YourName" varchar(25) NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "Budget" varchar(25) NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "timeLine" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "discription" varchar(1000) NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "contact" DROP COLUMN "fullName";--> statement-breakpoint
ALTER TABLE "contact" DROP COLUMN "querry";