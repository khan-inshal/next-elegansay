import React from "react";
import { GhostButton } from "../../Utils/GhostButton";
import { BsArrowRight } from "react-icons/bs";

const FeaturedLinkBtn = () => {
  return (
    <GhostButton variant="black-outline" href="/properties">
      View All Properties <BsArrowRight className="text-2xl" />
    </GhostButton>
  );
};

export default FeaturedLinkBtn;
