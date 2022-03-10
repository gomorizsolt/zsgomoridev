import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post } from "lib/types";
import { getAllPosts } from "lib/blog";
import Layout from "components/Layout";
import PostCard from "components/PostCard";

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
      <h1>Blog</h1>

      <div className="mt-6">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Home;
