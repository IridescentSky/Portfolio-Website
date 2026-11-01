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
import Link from "next/link";

export default function MobileNav() {
    return (
        <>
            <div className="py-3 px-5 flex justify-between bg-[#1D3557] text-white">
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
                            Pages
                        </SheetHeader>
                        <div className="flex flex-col gap-2">
                            <Button variant="ghost" className={"text-lg"}><Link href="/">Home</Link></Button>
                            <Button variant="ghost" className={"text-lg"}><Link href="/Projects">Projects</Link></Button>
                            <Button variant="ghost" className={"text-lg"}><Link href="/Blog">Blog</Link></Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}