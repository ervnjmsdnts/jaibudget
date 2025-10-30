import AddExpenseDrawer from "@/components/add-expense-drawer";
import React from "react";
import FilterExpensesDrawer from "./_components/filter-expenses-drawer";
import { cn } from "@/lib/utils";

function ExpenseItem({
  name,
  category,
  amount,
  time,
}: {
  name: string;
  category: "bills" | "personal" | "investment";
  amount: string;
  time: string;
}) {
  return (
    <div className="grid grid-cols-3 p-1 text-sm border-b border-[#565D87] border-dashed">
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-xs text-gray-400 ">{time}</p>
      </div>
      <p
        className={cn(
          "place-self-center",
          category === "bills"
            ? "text-red-400"
            : category === "personal"
              ? "text-yellow-400"
              : "text-green-400",
        )}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
      <p style={{ placeSelf: "center end" }}>&#8369;{amount}</p>
    </div>
  );
}

export default function ExpensePage() {
  return (
    <div className="py-10 h-full flex flex-col text-background">
      <div className="w-[calc(100%-70px)] mx-auto bg-white flex flex-col overflow-auto rounded-3xl flex-1">
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-bold text-background">All Expenses</h2>
          <div className="flex items-center space-x-4">
            <AddExpenseDrawer isGhost={false} />
            <FilterExpensesDrawer />
          </div>
        </div>
        <div className="overflow-y-scroll px-4">
          <p className="text-gray-400 font-bold text-sm pb-1">
            October 30, 2025
          </p>
          <ExpenseItem
            time="08:30 AM"
            name="Electricity Bill"
            category="bills"
            amount="2,500.00"
          />
          <ExpenseItem
            time="08:30 AM"
            name="Groceries"
            category="personal"
            amount="1,200.00"
          />
          <ExpenseItem
            time="08:30 AM"
            name="Internet Bill"
            category="bills"
            amount="1,800.00"
          />
        </div>
      </div>
    </div>
  );
}
