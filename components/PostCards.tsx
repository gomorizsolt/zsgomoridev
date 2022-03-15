import type { Post } from "lib/types";
import React from "react";
import Link from "next/link";
import { useViewsCounter } from "hooks";
import { formatViews } from "lib/formatViews";
import Spinner from "components/Spinner";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { views, isLoading } = useViewsCounter(post.slug);

  return (
    <Link href={`/blog/${post.slug}`} prefetch={false}>
      <a className="-ml-4 block rounded-lg p-4 transition-colors duration-150 ease-in hover:bg-grey-800">
        <div className="flex items-center justify-between">
          <p>
            {post.formattedDate}
            <span className="mx-2">•</span>
            {post.formattedReadingTime}
          </p>

          {isLoading ? <Spinner /> : <p>{formatViews(views)}</p>}
        </div>

        <h2 className="mt-1 text-3xl">{post.title}</h2>

        <p className="mt-1">{post.description}</p>
      </a>
    </Link>
  );
};

interface PostCardsProps {
  posts: Post[];
}

const PostCards: React.FC<PostCardsProps> = ({ posts }) => (
  <div className="space-y-6">
    {posts.map((post) => (
      <PostCard key={post.title} post={post} />
    ))}
  </div>
);

export default PostCards;
