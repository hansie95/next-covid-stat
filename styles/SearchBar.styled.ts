import styled from "styled-components";
interface Box {
  w?: string;
  m?: string;
}

export const StyledBox = styled.div<Box>`
  weight: ${(props) => props.w};
  margin: ${(props) => props.m};
`;
