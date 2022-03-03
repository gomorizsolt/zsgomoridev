import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import Button from "components/Button";
import Avatar from "public/images/avatar.png";

const Home: NextPage = () => (
  <Layout>
    <section className="flex items-center justify-between">
      <div className="pr-4">
        <h1>ZSOLT GOMORI</h1>

        <p className="mt-2">
          Frontend Developer at <strong>Reppublika</strong>. A down-to-earth guy
          with eagerness to grow and enthusiasm for health. Fan of playing &
          watching basketball.
        </p>

        <Link href="/about" passHref>
          <a>
            <Button className="mt-4">about me</Button>
          </a>
        </Link>
      </div>

      <div className="border-grey-100 relative h-36 w-36 flex-shrink-0 rounded-full border-2 border-solid">
        <Image src={Avatar} layout="fill" alt="Picture of Zsolt Gomori" />
      </div>
    </section>

    <section className="mt-12">
      <h1>Blog</h1>
    </section>
  </Layout>
);

export default Home;
