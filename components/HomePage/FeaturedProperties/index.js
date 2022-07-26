import { BsArrowRight } from "react-icons/bs";
import FeaturedList from "./FeaturedList";
import { GhostButton } from "../../Utils/GhostButton";
import FeaturedLinkBtn from "./FeaturedLinkBtn";

const FeaturedProperties = ({ properties }) => {
  return (
    <section className="container container-width py-8 flex flex-col">
      <div className="mb-8 flex flex-col justify-between items-center lg:mb-6 lg:flex-row">
        <h3 className="text-center font-bold text-3xl lg:text-5xl">
          Featured Properties
        </h3>
        <div className="hidden lg:block">
          <FeaturedLinkBtn />
        </div>
      </div>

      <FeaturedList properties={properties} />

      <div className="mx-auto mt-4 lg:hidden">
        <FeaturedLinkBtn />
      </div>
    </section>
  );
};

export default FeaturedProperties;
