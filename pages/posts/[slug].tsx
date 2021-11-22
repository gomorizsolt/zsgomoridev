import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Post } from '../../lib/types';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import assertIsNonNullish from '../../lib/assertIsNonNullish';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  // determines which paths will be pre-rendered
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    // render a 404 page if the requested path has no matching page: https://nextjs.org/docs/basic-features/data-fetching#fallback-false
    fallback: false,
  };
};

type Props = {
  post: Post;
};

// https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  assertIsNonNullish(context.params);

  const { slug } = context.params;
  const post = getPostBySlug(slug, ['content']);

  return {
    props: {
      post,
    },
  };
};

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  if (!post.content) return <div>${post.title} has no content.</div>;

  return (
    <h1>
      {post.title} {post.date}
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </h1>
  );
};

export default BlogPost;
