"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainNav() {
    return (
        <div className="py-3 px-5 flex justify-between bg-white">
            {/* Name */}
            <div className="flex items-center">
                <h1 className="">Frank Huang</h1>
            </div>

            {/* Nav Links */}
            <div className="">
                <Button variant="ghost"><Link href="/">Home</Link></Button>
                <Button variant="ghost"><Link href="/Projects">Projects</Link></Button>
                <Button variant="ghost"><Link href="/Blog">Blog</Link></Button>
            </div>
        </div>
    )
}