/* Code is taken from https://adeelhere.com/blog/2025-12-10-how-to-build-a-markdown-blog-with-nextjs so far. 
*/

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostByFileName } from "@/lib/blog-api";
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

// export async function generateMetadata(props: Params): Promise<Metadata> {
//     const params = await props.params;
//     const post = 
// }