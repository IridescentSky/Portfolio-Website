// Unused 

import ProjectInterface from "@/interfaces/ProjectInterface";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectCard({ title, description, tags, coverImage, modalData }: ProjectInterface) {
    return (
        <div className="w-md lg:w-md">
            <Card className="pt-0">
                <div className="relative background-blue-300 w-full h-50">
                    <Image 
                        src={coverImage.src}
                        fill={true}
                        alt={coverImage.alt}
                        className="object-cover"
                    />
                </div>
                <CardHeader>{title}</CardHeader>
                <CardDescription>
                    <div className="px-5">
                        {description}
                    </div>
                </CardDescription>
                <CardFooter className="flex justify-between">
                    <div className="flex gap-3">
                        {tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}