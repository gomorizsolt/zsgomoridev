export interface Post {
  title: string;
  date: string;
  formattedDate: string;
  slug: string;
  content: string;
  description: string;
  readingTime: string;
  coverImage: string;
  tags: string[];
}

export type Fields = "content";
