import React from "react";
import { Row } from "react-bootstrap";

import { Column } from "../StyledComponents";
import {
  Container,
  Paragraph,
  Question
} from "../StyledComponents/Description";

const Description = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Question>How does it works ?</Question>
        </Column>
      </Row>
      <Row>
        <Column>
          <Paragraph>
            Insert a title that you are looking for in the input and click the
            Search Button to get the list 10 most accurate results.
          </Paragraph>
        </Column>
      </Row>
    </Container>
  );
};

export { Description };
