import React from "react";

import { Category } from "../StyledComponents/InformationItem";

const InformationItem = ({ category, content }) => {
  return (
    <div>
      <Category>{category}:</Category> <span>{content}</span>
    </div>
  );
};

export { InformationItem };
