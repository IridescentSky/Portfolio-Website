/*
Markdown Blog created following steps of https://adeelhere.com/blog/2025-12-10-how-to-build-a-markdown-blog-with-nextjs. 
I am altering the code to try to be asynchronous.
*/

import { Post }  from '@/interfaces/Post';
import { promises as fs} from 'fs';
import matter from 'gray-matter';
import { get } from 'http';
import { join } from 'path';

import getReadTime from './reading-time';

// TODO: Check for why @/ doesn't work
// const postsDirectory = '@/content/posts';
const postsDirectory = './content/posts';

export async function getPostFileNames() {
    return await fs.readdir(postsDirectory);
}

export async function getPostByFileName(fileName: string): Promise<Post> {
    const filePath = join(postsDirectory, fileName);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const readTime = getReadTime(content);

    return { ...data, readTime, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
    const fileNames = await getPostFileNames();
    const posts = await Promise.all(fileNames.map((fileName: string) => getPostByFileName(fileName)));
    posts.sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    const posts = await getAllPosts();

    let target_post = undefined;

    posts.forEach((post) => {
        if (post.slug == slug) {
            target_post = post
        }
    });
    return target_post;
}