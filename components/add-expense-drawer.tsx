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

export default function AddExpenseDrawer({
  ButtonTrigger,
}: {
  ButtonTrigger?: React.ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {ButtonTrigger ? (
          ButtonTrigger
        ) : (
          <Button size="icon" variant="ghost">
            <Plus />
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
