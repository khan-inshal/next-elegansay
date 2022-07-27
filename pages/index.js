import Head from "next/head";
import { About } from "../components/HomePage/About";
import { Hero } from "../components/HomePage/Hero";
import FeaturedProperties from "../components/HomePage/FeaturedProperties/";
import { createClient } from "contentful";
import Trusted from "../components/HomePage/Trusted";

export async function getStaticProps() {
  const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  });

  const content = await client.getEntries({ content_type: "property" });

  return {
    props: {
      properties: content.items,
    },
  };
}

export default function Home({ properties }) {
  return (
    <>
      <Head>
        <title>Elegansay</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <section className="bg-black">
          <Hero />
          <Trusted />
          <About />
        </section>
        <FeaturedProperties properties={properties} />
      </main>
    </>
  );
}
