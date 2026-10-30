// Unused

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function BlogCard() {
    return (
        <div className="w-md lg:w-xl">
            <Card className="pt-0">
                <div className="relative w-full h-50">
                    {/* TODO: Add sizes for optimization */}
                    <Image 
                        src="/Black-Tailed_Prairie_Dog.jpg"
                        fill={true}
                        alt="Prairie Dog"
                        className="object-cover"
                    />
                </div>
                <CardHeader>Blog Title</CardHeader>
                <CardDescription>
                    <div className="px-5">
                        Test Image of Prairie Dog from Joe Ravi, CC-BY-SA 3.0
                    </div>
                </CardDescription>
                <CardFooter>
                    <div className="flex gap-3">
                        <Badge>Python</Badge>
                        <Badge>CV</Badge>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}