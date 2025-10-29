import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

function BudgetItem({
  amount,
  category,
  percentage,
}: {
  amount: string;
  category: "bills" | "personal" | "investment";
  percentage: string;
}) {
  return (
    <div>
      <p>&#8369;{amount}</p>
      <p className="text-sm">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
      <p
        className={cn(
          "text-xs",
          category === "bills"
            ? "text-red-400"
            : category === "personal"
              ? "text-yellow-400"
              : "text-green-400",
        )}
      >
        {percentage}
      </p>
    </div>
  );
}

export default function PlannedBudgets() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-center">Planned Budgets</h3>
      <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr] place-items-center h-full text-center">
        <BudgetItem amount="300,000.00" category="bills" percentage="50%" />
        <Separator orientation="vertical" className="h-auto" />
        <BudgetItem amount="300,000.00" category="personal" percentage="30%" />
        <Separator orientation="vertical" />
        <BudgetItem
          amount="300,000.00"
          category="investment"
          percentage="20%"
        />
      </div>
    </div>
  );
}
