/* Code is taken from https://adeelhere.com/blog/2025-12-10-how-to-build-a-markdown-blog-with-nextjs so far. 
*/

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog-api";
import markdownToHtml from "@/lib/md-processor";
import Image from "next/image";
import "./page.css";

type Params = {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);

    if (post === undefined) return {};

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            images: [{ url: post.coverImage.src}],
        }
    }
}

export default async function Post(props: Params) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);
    console.log("POST")
    console.log(post);

    if (post === undefined) {
        notFound();
    }
    
    const content = await markdownToHtml(post.content);

    return (
        // TODO: Figure out a width that you like
        <article className="max-w-3xl mx-auto px-4 py-16">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

                {/* Cover Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image src={post.coverImage.src} alt={post.coverImage.alt} fill priority className="object-cover" />
                    {post.coverImageCredit && (<div className="absolute bottom-0 right-0 bg-black/50 text-white text-sm px-2 py-1">
                    Photo by {" "}
                        <a
                            href={post.coverImageCredit.photographerURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            {post.coverImageCredit.photographerName}
                        </a>
                    {post.coverImageCredit.sourceURL && <p>
                        <a  
                            className="underline"
                            href={post.coverImageCredit.sourceURL}
                        >Source Link
                        </a>
                    </p>}
                    {post.coverImageCredit?.license && <p>{post.coverImageCredit.license}</p>}
                    </div>)}
                </div>

                {/* TODO: Add image credit */}
            </header>

            <div className="markdown" dangerouslySetInnerHTML={{__html: content}} />
        </article>
    )
}