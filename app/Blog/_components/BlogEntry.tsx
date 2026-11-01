import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

import PostEntry from "@/interfaces/PostEntry"

export default function BlogEntry({ slug, title, tags, description, date, readTime, coverImage, coverImageCredit = undefined }: PostEntry) {
    // TODO: Implement cover image credit
    return (
        <article>
            <Link href={`Blog/${slug}`}>
                <div className="w-xs md:w-2xl lg:w-4xl flex flex-col md:flex-row gap-5">
                    {/* Blog Thumbnail */}
                    {/* TODO: Add sizes for optimization */}
                    <div className="relative min-w-24 h-50 md:max-w-2xs w-full md:h-36 md:h-50">
                        <Image
                            src={coverImage.src}
                            fill={true}
                            alt={coverImage.alt}
                            className="object-cover"
                        />
                    </div>

                    {/* Entry Contents */}
                    <div className="w-full flex flex-col">
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
                            <p className="max-md:hidden text-ellipsis">{description}</p>
                        </div>

                        {/* Details */}
                        <div className="w-full flex justify-between mt-auto text-sm lg:text-base">
                            <p className="text-slate-700">{new Date(date).toDateString()}</p>
                            {/* TODO: Figure out how to update the x minute read */}
                            <p className="text-slate-700">{readTime} min read</p>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}