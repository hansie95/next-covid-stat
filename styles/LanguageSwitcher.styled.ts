import styled from "styled-components";

interface GridItem {
  colStart: number;
}
export const GridItem = styled.div<GridItem>`
  grid-column-start: ${(props) => props.colStart};
  align-items: center;
  margin: auto;
`;

export const Center = styled.div`
  display: flex;
  alignitems: center;
  justifycontent: center;
`;
