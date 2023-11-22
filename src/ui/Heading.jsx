import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(prop) =>
    prop.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
  ${(prop) =>
    prop.as === "h2" &&
    css`
      font-size: 30px;
      font-weight: 600;
      color: blue;
    `}
  ${(prop) =>
    prop.as === "h3" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
`;

export default Heading;
