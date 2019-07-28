import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../StyledComponents";

const HomeButton = () => {
  return (
    <Link to="/">
      <Button margintop={15}>Home</Button>
    </Link>
  );
};

export { HomeButton };
