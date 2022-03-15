import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post } from "lib/types";
import { getAllPosts } from "lib/blog";
import Layout from "components/Layout";
import PostCards from "components/PostCards";

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts().slice(0, 3);

  return {
    props: {
      posts,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <Layout>
    <section className="border-b-2 border-b-grey-500 py-12 text-center">
      <h1 className="gradient-text text-6xl sm:text-7xl">ZSOLT GOMORI</h1>

      <p className="mx-auto mt-4 max-w-xl">
        Frontend Developer. A down-to-earth guy with eagerness to learn and
        passion towards physical & mental health. Big fan of basketball.
      </p>
    </section>

    <section className="py-12">
      <h1 className="mb-6">Blog</h1>

      <PostCards posts={posts} />
    </section>
  </Layout>
);

export default Home;
