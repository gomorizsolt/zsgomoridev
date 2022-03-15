export interface Post {
  title: string;
  date: string;
  formattedDate: string;
  slug: string;
  content: string;
  description: string;
  formattedReadingTime: string;
  tag: string;
}

export type Fields = "content";
