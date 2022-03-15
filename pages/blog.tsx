import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import type { Post } from "lib/types";
import React from "react";
import Layout from "components/Layout";
import PostCards from "components/PostCards";
import { getAllPosts } from "lib/blog";

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <Layout
    title="Blog | ZSOLT GOMORI"
    description="Thoughts on frontend development."
  >
    <h1 className="mb-8">blog</h1>

    <PostCards posts={posts} />
  </Layout>
);

export default Blog;
