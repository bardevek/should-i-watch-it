import React from "react";

import { Button } from "../StyledComponents";

const SearchButton = ({ disabled, buttonMessage }) => {
  return (
    <Button disabled={disabled} variant="primary" type="submit">
      {buttonMessage}
    </Button>
  );
};

export { SearchButton };
