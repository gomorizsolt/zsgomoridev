import React from "react";
import type { Post } from "lib/types";
import { useViews } from "hooks";

interface BlogCardProps {
  post: Post;
}

interface ViewsProps {
  slug: string;
}

const Views: React.FC<ViewsProps> = ({ slug }) => {
  const { views, isLoading, isError } = useViews(slug);

  if (isLoading) {
    return <p>Loading views...</p>;
  }

  if (isError) {
    return <p>Error ...</p>;
  }

  return <p>Views: {views}</p>;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p className="text-sm">{post.date}</p>
    <Views slug={post.slug} />
  </div>
);

export default BlogCard;
