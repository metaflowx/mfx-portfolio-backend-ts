CREATE TABLE "assets" (
	"assetId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"symbol" varchar NOT NULL,
	"decimal" integer NOT NULL,
	"asset_type" varchar NOT NULL,
	"chainId" integer NOT NULL,
	"asset_address" varchar NOT NULL,
	"network" varchar NOT NULL,
	"status" varchar DEFAULT 'active' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "assets_name_unique" UNIQUE("name"),
	CONSTRAINT "assets_symbol_unique" UNIQUE("symbol"),
	CONSTRAINT "assets_asset_address_unique" UNIQUE("asset_address")
);
--> statement-breakpoint
CREATE TABLE "walletBalances" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"walletId" uuid NOT NULL,
	"assetId" uuid NOT NULL,
	"balance" varchar DEFAULT '0' NOT NULL,
	"demoBalance" varchar DEFAULT '0' NOT NULL,
	"holdBalance" varchar DEFAULT '0' NOT NULL,
	"lockedBalance" varchar DEFAULT '0' NOT NULL,
	"collateralBalance" varchar DEFAULT '0' NOT NULL,
	"interestBalance" varchar DEFAULT '0' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "wallets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid NOT NULL,
	"networkType" varchar NOT NULL,
	"networkName" varchar NOT NULL,
	"walletAddress" varchar NOT NULL,
	"walletPrivateKey" varchar NOT NULL,
	"encryptedSymmetricKey" varchar NOT NULL,
	"salt" varchar NOT NULL,
	"status" varchar DEFAULT 'active' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "wallets_walletAddress_unique" UNIQUE("walletAddress"),
	CONSTRAINT "wallets_walletPrivateKey_unique" UNIQUE("walletPrivateKey"),
	CONSTRAINT "wallets_encryptedSymmetricKey_unique" UNIQUE("encryptedSymmetricKey"),
	CONSTRAINT "wallets_salt_unique" UNIQUE("salt")
);
--> statement-breakpoint
ALTER TABLE "walletBalances" ADD CONSTRAINT "walletBalances_walletId_wallets_id_fk" FOREIGN KEY ("walletId") REFERENCES "public"."wallets"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "walletBalances" ADD CONSTRAINT "walletBalances_assetId_assets_assetId_fk" FOREIGN KEY ("assetId") REFERENCES "public"."assets"("assetId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;