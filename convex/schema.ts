import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,
  budgets: defineTable({
    userId: v.id("users"),

    overallAmount: v.number(), // total budget amount for the month
    targetSavings: v.number(), // savings goal for the month
    allowance: v.number(), // amount left to spend for the month
  }).index("by_userId", ["userId"]),
  transactions: defineTable({
    budgetId: v.id("budgets"),

    amount: v.number(),
    name: v.string(),
    type: v.union(
      v.literal("bills"),
      v.literal("personal"),
      v.literal("investment"),
    ),
  })
    .index("by_budgetId", ["budgetId"])
    .index("by_budgetId_type", ["budgetId", "type"]),
});
