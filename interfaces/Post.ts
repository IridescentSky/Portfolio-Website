/*
Markdown Blog created following steps of https://adeelhere.com/blog/2025-12-10-how-to-build-a-markdown-blog-with-nextjs
*/

// TODO: See if there's a way to use Date() type for date
export interface Post {
    slug: string;
    title: string;
    tags: string[];
    description: string;
    date: string;
    readTime: number;
    coverImage: {
        src: string;
        alt: string;
    }
    coverImageCredit?: {
        photographerName: string;
        photographerURL?: string;
        sourceURL: string;
        license?: string;
    }
    content: string;
}