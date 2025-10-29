import { cn } from "@/lib/utils";
import React from "react";

function ExpenseItem({
  name,
  date,
  category,
  amount,
}: {
  name: string;
  date: string;
  category: "bills" | "personal" | "investment";
  amount: string;
}) {
  return (
    <div className="grid grid-cols-3 p-1 text-sm border-b border-[#565D87] border-dashed">
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-xs text-gray-400 ">{date}</p>
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

export default function LatestExpenses() {
  return (
    <div className="p-4 text-background w-[calc(100%-70px)] flex flex-col overflow-auto m-auto rounded-3xl bg-white flex-1">
      <h3 className="font-bold pb-4">Expenses</h3>
      <div className="flex flex-col gap-2 overflow-y-scroll flex-1 h-0">
        <ExpenseItem
          name="Electricity Bill"
          date="2024-06-01"
          category="bills"
          amount="2,500.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
        <ExpenseItem
          name="Groceries"
          date="2024-06-02"
          category="personal"
          amount="1,200.00"
        />
      </div>
    </div>
  );
}
