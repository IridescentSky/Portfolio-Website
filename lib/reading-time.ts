import matter from "gray-matter";

export default function getReadTime(markdown: string) {
    const {data, content} = matter(markdown);

    if (!content) return 0;

    // These Regexes were taken by AI since I don't really understand them well. I tried to read over 
    // the explanation for each Regex though. 

    // Line Ending Normalization
    content.replace("\r\n", "\n");
    content.replace("\r", "\n");

    // Remove Multi-line code blocks
    content.replace(/```[/s/S]*?```/g, '');
    // Remove Inline code
    content.replace(/`([^`]+)`/g, '$1');
    // Remove Images
    content.replace(/!\[.*?\]\(.*?\)/g, '');
    // Remove Links
    content.replace(/\[(.*?)\]\(.*?\)/g, '$1');
    // Remove Headers, Lists, Blockquotes
    content.replace(/^[#\-\*\+\>\s]+/gm, '');
    // Emphasis
    content.replace(/[\*\_~]+/g, '');

    const wordRegex = /[^\s]+/g;
    const wordsPerMin = 238;

    const wordCount = content.match(wordRegex)?.length || 0

    return Math.ceil(wordCount/wordsPerMin);
}