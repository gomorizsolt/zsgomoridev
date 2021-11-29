import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import type { Post } from 'lib/types';
import { getAllPosts } from 'lib/blog';
import BlogCard from 'components/BlogCard';

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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <BlogCard key={post.title} post={post} />
    ))}
  </div>
);

export default Home;
