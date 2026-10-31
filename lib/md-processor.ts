/*
Markdown Blog created following steps of https://adeelhere.com/blog/2025-12-10-how-to-build-a-markdown-blog-with-nextjs. 
The code here so far is directly taken from the blog, but I will add Shiki later
*/

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import rehypeStringify from "rehype-stringify";

import matter from "gray-matter";

export default async function markdownToHTML(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        code: [
          ...(defaultSchema.attributes?.code || []),
          // List of all allowed languages:
          ['className', 'language-js', 'language-css', 'language-md']
        ]
      }
    })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString()
}