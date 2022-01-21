import styled from "styled-components";

interface GridItem {
  colStart: number;
}
export const GridItem = styled.div<GridItem>`
  grid-column-start: ${(props) => props.colStart};
  align-items: center;
  margin: auto;
`;

interface Center {
  w?: string;
  h?: string;
}

export const Center = styled.div<Center>`
  display: flex;
  alignitems: center;
  justifycontent: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;
