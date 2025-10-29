"use client";

import StackedCards from "./_components/stacked-cards";
import PlannedBudgets from "./_components/planned-budgets";

export default function Home() {
  return (
    <div className="py-10 h-full">
      <StackedCards />
      <div className="px-6">
        <PlannedBudgets />
      </div>
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
