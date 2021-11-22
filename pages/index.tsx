import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import type { Post } from '../lib/types';
import { getAllPosts } from '../lib/api';

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
  <ul>
    {posts.map((post) => (
      <li key={post.title}>
        {post.title} {post.slug} {post.date}
      </li>
    ))}
  </ul>
);

export default Home;
