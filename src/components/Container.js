import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: -100px auto;
  position: relative;
  z-index: 100;
  background: #f2f2f2;
`;

export default function ContainerComponent(props) {
  return <Container>{props.children}</Container>;
}
