import React, { Fragment } from "react";
import { Row } from "react-bootstrap";

import { Column } from "../StyledComponents";
import { Subtitle, Title } from "../StyledComponents/Header";

const Header = () => {
  return (
    <Fragment>
      <Row>
        <Column>
          <Title>Should I watch it?</Title>
        </Column>
      </Row>
      <Row>
        <Column>
          <Subtitle>
            If you've ever asked yourself such a question, that's the right
            place!
          </Subtitle>
        </Column>
      </Row>
    </Fragment>
  );
};

export { Header };
