"use client";

import StackedCards from "./_components/stacked-cards";
import PlannedBudgets from "./_components/planned-budgets";
import LatestExpenses from "./_components/latest-expenses";

export default function Home() {
  return (
    <div className="py-10 h-full flex flex-col gap-6">
      <StackedCards />
      <PlannedBudgets />
      <LatestExpenses />
    </div>
  );
}

// function SignOutButton() {
//   const { isAuthenticated } = useConvexAuth();
//   const { signOut } = useAuthActions();
//   const router = useRouter();
//   return (
//     <>
//       {isAuthenticated && (
//         <button
//           className="bg-slate-200 dark:bg-slate-800 text-foreground rounded-md px-2 py-1"
//           onClick={() =>
//             void signOut().then(() => {
//               router.push("/signin");
//             })
//           }
//         >
//           Sign out
//         </button>
//       )}
//     </>
//   );
// }
