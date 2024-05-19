ALTER TABLE "donations" ALTER COLUMN "donated_by" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "donations" ALTER COLUMN "changed_by" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "changed_by" DROP NOT NULL;