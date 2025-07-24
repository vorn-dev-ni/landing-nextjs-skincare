"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CollapseMenu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Collapsible onOpenChange={(value) => setOpen(value)}>
      <CollapsibleTrigger asChild>
        <div className="flex justify-between items-center hover:bg-gray-50">
          {children}

          <Button variant={"ghost"}>
            {!isOpen ? <ChevronDown /> : <ChevronUp />}
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pt-2 flex flex-col gap-4 text-sm">
        <Link href="/contact-us" className="hover:bg-gray-50 py-2">
          Contact
        </Link>
        <Link href="/faq" className="hover:bg-gray-50  py-2">
          FAQ
        </Link>
        <Link href="/about" className="hover:bg-gray-50  py-2">
          About
        </Link>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapseMenu;
