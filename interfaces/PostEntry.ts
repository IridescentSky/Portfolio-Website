/*
Interface containing post data excluding the content
*/

// TODO: See if there's a way to use Date() type for date
export default interface PostEntry {
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
}