import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function StackedCards() {
  return (
    <div>
      <div className="relative h-[250px]">
        <div className="bg-[#B5BEF0] h-[200px] w-[calc(100%-70px)] -rotate-[8deg] rounded-3xl absolute left-1/2 -translate-x-1/2" />
        <div className="bg-linear-to-r from-[#B5BEF0]/50 to-[#050B2C]/50 backdrop-blur-xs h-[200px] w-[calc(100%-70px)] rounded-3xl absolute top-3 left-1/2 -translate-x-1/2">
          <div className="py-4 px-6 flex flex-col h-full relative justify-between">
            <Button size="icon" className="rounded-full absolute top-4 right-4">
              <Plus color="#0b031a" />
            </Button>
            <div>
              <p>Total</p>
              <p className="font-bold text-xl">&#8369;200,000.00</p>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p>Target</p>
                <p className="font-bold text-lg">&#8369;100,000.00</p>
              </div>
              <div>
                <p>Allowance</p>
                <p className="font-bold text-lg">&#8369;100,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
