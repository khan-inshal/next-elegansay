import PropertiesCard from "./PropertiesCard";

const PropertiesList = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties?.map((property) => {
        return (
          <PropertiesCard
            key={property.sys.id}
            propertyFields={property.fields}
          />
        );
      })}
    </div>
  );
};

export default PropertiesList;
