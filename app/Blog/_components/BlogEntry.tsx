import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

import PostEntry from "@/interfaces/PostEntry"

export default function BlogEntry({ slug, title, tags, description, date, coverImage, coverImageCredit = undefined }: PostEntry) {
    // TODO: Implement cover image credit
    return (
        <article>
            <Link href={`blog/${slug}`}>
                <div className="w-4xl flex gap-5">
                    {/* Blog Thumbnail */}
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
                        <div className="w-full flex justify-between mt-2 text-sm lg:text-base">
                            <p className="text-slate-700">{new Date(date).toDateString()}</p>
                            {/* TODO: Figure out how to update the x minute read */}
                            <p className="text-slate-700">5 min read</p>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}