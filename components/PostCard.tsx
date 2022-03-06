import React from "react";
import Link from "next/link";
import type { Post } from "lib/types";
import { useViews } from "hooks";
import Spinner from "components/Spinner";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { views, isLoading } = useViews(post.slug);

  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className="flex items-center justify-between">
          <p>{post.formattedDate}</p>

          {isLoading ? <Spinner /> : <p>{`${views} views`}</p>}
        </div>

        <h2 className="mt-1 text-3xl">{post.title}</h2>

        <p className="mt-1">{post.description}</p>
      </a>
    </Link>
  );
};

export default PostCard;
