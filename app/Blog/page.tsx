/* Markdown Blog created following steps of https://adeelhere.com/blog/2025-12-10-how-to-build-a-markdown-blog-with-nextjs. 
*/

import { getAllPosts } from "@/lib/blog-api";

import BlogCard from "./_components/BlogCard";
import BlogEntry from "./_components/BlogEntry";
import PostEntry from "@/interfaces/PostEntry";

export const metadata = {
  title: "Blog",
  description: "My project journals, CTF writeups, and other miscellaneous thoughts."
}

export default async function BlogHome() {
  const posts = await getAllPosts();
  // Post data without content
  const postHeaderData: PostEntry[] = [];
  posts.forEach((post) => {
    const {content, ...data} = post
    postHeaderData.push(data);
  })

  return (
    <div className="px-5 py-5">
      <div className="flex flex-wrap justify-center gap-16">
          {posts.map((post) => (
            // TODO: Figure out a way to avoid passing the content directly
            <BlogEntry 
              key={post.slug}
              {...post}
            />
          ))}
      </div>
    </div>
  );
}
