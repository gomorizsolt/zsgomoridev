import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import type { ParsedUrlQuery } from "querystring";
import { format } from "date-fns";
import type { Post } from "lib/types";
import { getAllPosts, getPostBySlug, markdownToHtml } from "lib/blog";
import Layout from "components/Layout";
import assertIsNonNullish from "lib/assertIsNonNullish";
import { useViews } from "hooks";

type Props = {
  post: Post;
};

// https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  assertIsNonNullish(context.params);

  const { slug } = context.params;
  const post = getPostBySlug(slug, ["content"]);
  const content = await markdownToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

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

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const { views, isLoading } = useViews(post.slug);

  if (!post.content) return <div>404 - {post.title} :(</div>;

  return (
    <Layout>
      <h1 className="mb-3">{post.title}</h1>

      <p className="mb-8 text-sm font-bold">
        {post.formattedDate}
        <span className="mx-2">•</span>
        {post.readingTime}
        <span className="mx-2">•</span>
        {`${views} views`}
      </p>

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
};

export default BlogPost;
