import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import { format } from "date-fns";
import readingTime from "reading-time";
import type { Post, Fields } from "./types";

const postsDirectory = join(process.cwd(), "posts");

const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug: string, fields: Fields[] = []): Post => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const { title, date, description, tag } = data;

  // https://stackoverflow.com/a/69104602/9599137
  const items = {
    title,
    date,
    formattedDate: format(new Date(date), "MMMM dd, yyyy"),
    description,
    readingTime: readingTime(content).text,
    slug: realSlug,
    tag,
  } as Post;

  fields.forEach((field) => {
    if (field === "content") {
      items.content = content;
    }
  });

  return items;
};

export const getAllPosts = (fields: Fields[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};

export const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(html, { sanitize: false })
    // @ts-ignore
    .use(prism)
    .process(markdown);

  return result.toString();
};
