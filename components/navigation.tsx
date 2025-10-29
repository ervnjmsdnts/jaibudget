"use client";

import { cn } from "@/lib/utils";
import { Coins, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

function NavItem({
  Icon,
  isActive,
}: {
  Icon: React.ElementType;
  isActive: boolean;
}) {
  return (
    <button
      className={cn(
        "p-4 hover:cursor-pointer hover:bg-navigation-item/50 bg-transparent grid place-items-center rounded-full m-2",
        isActive && "bg-navigation-item/50",
      )}
    >
      <Icon />
    </button>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div
      className="
        fixed z-50 left-1/2 -translate-x-1/2
        bottom-[max(1rem,env(safe-area-inset-bottom))]
      "
    >
      <div className="rounded-full bg-navigation-bg/50 min-w-40 h-16 px-2 flex items-center justify-between backdrop-blur-md shadow-lg">
        <NavItem Icon={Coins} isActive={pathname.includes("/expenses")} />
        <NavItem Icon={LayoutDashboard} isActive={pathname === "/"} />
        <NavItem Icon={Settings} isActive={pathname.includes("/settings")} />
      </div>
    </div>
  );
}
