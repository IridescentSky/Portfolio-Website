"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileNav() {
    return (
        <>
            <div className="py-3 px-5 flex justify-between">
            {/* Name */}
            <div className="flex items-center">
                <h1 className="">Frank Huang</h1>
            </div>

            {/* Nav Links */}
            <Sheet>
                <SheetTrigger render={
                    <Button>
                        <Menu/>
                    </Button>
                }/>
                <SheetContent>
                    <SheetHeader>
                        Testing
                    </SheetHeader>
                    <div className="flex flex-col gap-2">
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Projects</Button>
                        <Button variant="ghost">Blog</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
        </>
    )
}