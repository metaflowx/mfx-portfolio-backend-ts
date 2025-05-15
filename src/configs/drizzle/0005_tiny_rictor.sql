CREATE TABLE "blog" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "blog_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"image" varchar(255) NOT NULL,
	"heading" varchar(1000) NOT NULL,
	"author" varchar(25) NOT NULL,
	"published" timestamp NOT NULL,
	"category" varchar(25) NOT NULL,
	"paragraph" text NOT NULL,
	"images" varchar(255) NOT NULL,
	"headings" varchar(255) NOT NULL,
	"paragraphs" varchar(1000) NOT NULL,
	"tags" text NOT NULL,
	"role" varchar(50) DEFAULT 'admin' NOT NULL
);
