import React from "react";
import { Container, Circle, Font } from "./styles";
import Dots from "../dots/index.js";

export const Loading = ({ message }) => {
  return (
    <Container>
      <Circle />
      <Font>
        {message}
        <Dots />
      </Font>
    </Container>
  );
};
