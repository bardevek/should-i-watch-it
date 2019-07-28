import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import { Column } from "../StyledComponents";
import { ButtonColumn, Container } from "../StyledComponents/SearchContent";

import { SearchButton } from "./SearchButton";

const SearchContent = ({ buttonMessage = "Search" }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  return (
    <Form>
      <Container>
        <Column xs={10} sm={5}>
          <Form.Control
            type="text"
            placeholder="title"
            value={title}
            onChange={handleTitleChange}
          />
        </Column>
        <ButtonColumn xs={12} sm={4} md={2}>
          <Link
            to={{
              pathname: "/movies-list",
              search: `title=${title}`
            }}
          >
            <SearchButton disabled={!title} buttonMessage={buttonMessage} />
          </Link>
        </ButtonColumn>
      </Container>
    </Form>
  );
};

export { SearchContent };
