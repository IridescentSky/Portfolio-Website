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

export default function ProjectEntry({ title, description, tags, coverImage, links }: ProjectInterface) {
    return (
        <div>
            <div className="w-4xl flex gap-5">
                {/* Project Thumbnail */}
                {/* TODO: Add sizes for optimization */}
                <div className="relative min-w-24 max-w-2xs w-full h-36 md:h-50">
                    <Image
                        src={coverImage.src}
                        fill={true}
                        alt={coverImage.alt}
                        className="object-cover"
                    />
                </div>

                {/* Entry Contents */}
                <div className="w-full">
                    {/* Title */}
                    <h1 className="font-semibold md:text-lg">
                        {title}
                    </h1>

                    {/* Tags */}
                    <div className="flex gap-3 mt-1">
                        {/* TODO: Check if this works without using index. Otherwise use index and key as index */}
                        {tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>

                    {/* Description */}
                    {/* TODO: Figure out a way to crop description */}
                    <div className="max-h-36 mt-2 w-full">
                        <p className="max-sm:hidden text-ellipsis">{description}</p>
                    </div>

                    {/* Details */}
                    <div>
                        {links && <div className="flex gap-3">
                            {links.github && <a href={links.github}>
                                <FaGithub className="w-5 h-5" />
                            </a>}
                            {links.demo && <a href={links.demo}>Demo</a>}
                            {links.blog && <Link href={links.blog}>Blog</Link>}
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}