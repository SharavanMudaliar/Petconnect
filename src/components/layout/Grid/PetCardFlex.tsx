import React from "react";

const PetCardFlex = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

export const PawHubContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="container mx-auto px-4 md:px-12 pt-6 bg-blue-200 text-yellow-500">
    {children}
  </div>
);

export default PetCardFlex;
