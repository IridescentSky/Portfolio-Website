"use client"
import { Button } from "@/components/ui/button";

export default function MainNav() {
    return (
        <div className="py-3 px-5 flex justify-between">
            {/* Name */}
            <div className="flex items-center">
                <h1 className="">Frank Huang</h1>
            </div>

            {/* Nav Links */}
            <div className="">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Projects</Button>
                <Button variant="ghost">Blog</Button>
            </div>
        </div>
    )
}