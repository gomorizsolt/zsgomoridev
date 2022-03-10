import React from "react";
import Layout from "components/Layout";

const About: React.FC = () => (
  <Layout title="About | ZSOLT GOMORI">
    <section className="prose max-w-none text-justify">
      <h1>About Me</h1>
      <p>
        Hey there, it's Zsolt! I'm a frontend developer from Debrecen/Hungary.
        My life revolves around programming and solving problems. Over the
        years, it has turned into one of my favorite hobbies and 9-to-5 job. I'd
        say I have the best of both worlds.
      </p>
      <p>
        During my years at the university, I gained tremendous experience (in
        React in particular) by doing freelance work at{" "}
        <a
          href="https://github.com/c-hive/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          C-Hive
        </a>
        . At C-Hive, I learned a ton from{" "}
        <a
          href="https://github.com/thisismydesign"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Csaba Apagyi
        </a>{" "}
        - ranging from CI/CD through maintaining larger codebases to
        unit-testing. This one-and-a-half-year has definitely contributed to
        where I'm now.
      </p>
      <p>
        Currently I'm a frontend developer at{" "}
        <a
          href="https://www.reppublika.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Reppublika
        </a>{" "}
        working in a diverse environment with folks from other parts of the
        world. Our products are built on top of Vue and thus I've had to make a
        switch from React - making the switch was challenging and engaging at
        the same time. Besides Vue, I also get to gain real-world experience in
        AWS.
      </p>
      <p>
        I'm dedicated to learning, honing my skills constantly and keeping
        myself up to date with the latest technologies. Because of me being fond
        of learn by teaching, I'm in the process of catching up with writing
        articles about web development and my learnings in general.
      </p>

      <h2>Passions beyond web development</h2>

      <p>
        Even though my passion for programming is endless, it's cruical not to
        neglect my mind and body. After all, it's a mentally tiring profession
        and can take its toll on our life. When it comes to sports activities,
        I'm unfortunately limited due to having lower-back pain. Therefore, I
        tend to engage in physical activities that do not put much stress on my
        back, such as callisthenics, swimming and cycling. In addition to being
        physically active, I also pay close attention to my diet. I cook for
        myself, count macros and seek recipes to grow my{" "}
        <a
          href="https://recipes-warehouse.vercel.app/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          warehouse
        </a>
        .
      </p>

      <p>
        I'm a huge fan of playing and watching basketball - even though these
        days I'm rather watching it. My passion for it comes from my youth - I'd
        been playing basketball for more than twelve wonderful years in
        Jaszbereny. Despite the fact I'm no longer an active player, I'm an
        active follower of the Hungarian Championship and NBA as well as a
        certified Table Official.
      </p>
    </section>
  </Layout>
);

export default About;
