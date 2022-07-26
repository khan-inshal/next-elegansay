import { createClient } from "contentful";
import Head from "next/head";
import PropertiesList from "../../components/PropertiesPage/PropertiesList";

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

const Properties = ({ properties }) => {
  return (
    <>
      <Head>
        <title>All Properties - Comfystates</title>
      </Head>
      <main className="min-h-screen pt-16 px-4 bg-gray-200">
        <h1 className="font-bold text-3xl mt-4 mb-8 w-fit mx-auto md:text-4xl lg:text-5xl lg:mt-8 lg:mb-12">
          Properties for sale:
        </h1>
        <PropertiesList properties={properties} />
      </main>
    </>
  );
};

export default Properties;
