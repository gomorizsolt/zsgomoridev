import React from "react";
import Link from "next/link";
import type { Post } from "lib/types";
import { useViewsCounter } from "hooks";
import Spinner from "components/Spinner";

interface PostCardProps {
  post: Post;
}

const formatViews = (views?: number) => {
  if (!views) return;

  return `${views} views`;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { views, isLoading } = useViewsCounter(post.slug);

  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="-ml-4 block rounded-lg p-4 transition-colors duration-150 ease-in hover:bg-grey-800">
        <div className="flex items-center justify-between">
          <p>{post.formattedDate}</p>

          {isLoading ? <Spinner /> : <p>{formatViews(views)}</p>}
        </div>

        <h2 className="mt-1 text-3xl">{post.title}</h2>

        <p className="mt-1">{post.description}</p>
      </a>
    </Link>
  );
};

export default PostCard;
