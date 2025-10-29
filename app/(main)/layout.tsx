import Navigation from "@/components/navigation";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-full ">
      <main className="flex-1 overflow-y-scroll h-full">{children}</main>
      <Navigation />
    </div>
  );
}
