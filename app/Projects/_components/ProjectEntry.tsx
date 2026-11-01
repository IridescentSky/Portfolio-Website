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
import { ProjectModal } from "./ProjectModal";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProjectEntry({ title, description, tags, coverImage, modalData }: ProjectInterface) {
    return (
            <div className="w-sm lg:w-4xl flex flex-col max-md:items-center md:flex-row gap-5">
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
                <div className="max-w-2xs md:max-w-full w-full flex flex-col">
                    {/* Title */}
                    <h1 className="font-semibold md:text-lg">
                        {title}
                    </h1>

                    {/* Description */}
                    {/* TODO: Figure out a way to crop description */}
                    <div className="max-h-36 mt-2 w-full mb-3">
                        <p className="max-sm:hidden text-ellipsis">{description}</p>
                    </div>

                    <div className="mt-auto flex justify-between">
                        <ProjectModal title={title} modalData={modalData}/>
                        {/* Tags */}
                        <div className="flex gap-3 mt-1">
                            {/* TODO: Check if this works without using index. Otherwise use index and key as index */}
                            {tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}