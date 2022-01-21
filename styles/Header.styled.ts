import styled from "styled-components";

interface StyledBox {
  mt?: string;
  mb?: string;
  textAlign?: string;
}

export const StyledBox = styled.div<StyledBox>`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

export const GridHeader = styled.div`
  grid-template-columns: repeat(5, 1fr);
  display: grid;
`;
