import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Header from "components/Header";
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";

interface LayoutProps {
  title?: string;
  description?: string;
}

const defaultMeta = {
  title: "Zsolt Gomori",
  description:
    "Frontend developer, JavaScript & health  enthusiast, fan of basketball.",
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = defaultMeta.title,
  description = defaultMeta.description,
}) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          site_name: "Zsolt Gomori",
          title,
          description,
          url: `https://zsgomori.dev${router.asPath}`,
          images: [
            {
              url: "https://www.zsgomori.dev/images/og.jpg",
              alt: title,
              height: 630,
              width: 1200,
            },
          ],
        }}
        twitter={{
          handle: "@zsgomori",
          cardType: "summary_large_image",
        }}
      />

      <Header />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-14 md:px-0">
        {children}
      </main>

      <footer className="flex justify-center space-x-6 py-6">
        <a
          href="https://github.com/gomorizsolt/zsgomoridev"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaCode
            aria-label="Source"
            className="h-5 w-5 text-slate-300 transition-colors duration-150 hover:text-slate-200"
          />
        </a>

        <a
          href="https://github.com/gomorizsolt"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaGithub
            aria-label="GitHub"
            className="h-5 w-5 text-slate-300 transition-colors duration-150 hover:text-slate-200"
          />
        </a>

        <a
          href="https://twitter.com/zsgomori"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaTwitter
            aria-label="Twitter"
            className="h-5 w-5 text-slate-300 transition-colors duration-150 hover:text-slate-200"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/zsgomori/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaLinkedin
            aria-label="LinkedIn"
            className="h-5 w-5 text-slate-300 transition-colors duration-150 hover:text-slate-200"
          />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
