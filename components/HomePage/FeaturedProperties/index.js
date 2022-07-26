import FeaturedList from "./FeaturedList";
import FeaturedLinkBtn from "./FeaturedLinkBtn";

const FeaturedProperties = ({ properties }) => {
  return (
    <section className="container container-width py-8 flex flex-col">
      <div className="mb-8 flex flex-col justify-between items-center md:mb-6 md:flex-row">
        <h3 className="text-center font-bold text-3xl lg:text-5xl">
          Featured Properties
        </h3>
        <div className="hidden md:block">
          <FeaturedLinkBtn />
        </div>
      </div>

      <FeaturedList properties={properties} />

      <div className="mx-auto mt-4 md:hidden">
        <FeaturedLinkBtn />
      </div>
    </section>
  );
};

export default FeaturedProperties;
