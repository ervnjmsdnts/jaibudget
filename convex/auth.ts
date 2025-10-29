import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Google],
  callbacks: {
    async afterUserCreatedOrUpdated(ctx, { userId, existingUserId }) {
      if (existingUserId) {
        return;
      }
      await ctx.db.insert("budgets", {
        overallAmount: 0,
        targetSavings: 0,
        allowance: 0,
        userId,
      });
    },
  },
});
