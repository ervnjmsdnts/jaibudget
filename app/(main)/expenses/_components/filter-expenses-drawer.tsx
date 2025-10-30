import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ListFilter } from "lucide-react";
import React from "react";

export default function FilterExpensesDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <ListFilter color="#0b031a" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Expenses</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
