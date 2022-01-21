import styled from "styled-components";
interface Box {
  w?: string;
  m?: string;
}

export const Box = styled.div<Box>`
  margin: ${(props) => props.m};
  width: ${(props) => props.w};
`;
