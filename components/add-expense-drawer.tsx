import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function AddExpenseDrawer({
  ButtonTrigger,
  isGhost = true,
}: {
  ButtonTrigger?: React.ReactNode;
  isGhost?: boolean;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {ButtonTrigger ? (
          ButtonTrigger
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className={cn("rounded-full", !isGhost && "bg-transparent")}
          >
            <Plus color={!isGhost ? "#0b031a" : ""} />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add Expense</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
