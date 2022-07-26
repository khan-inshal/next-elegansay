import FeaturedCard from "./FeaturedCard";

const FeaturedList = ({ properties }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {properties?.map((property) => {
        return (
          <FeaturedCard
            key={property.sys.id}
            propertyFields={property.fields}
          />
        );
      })}
    </div>
  );
};

export default FeaturedList;
