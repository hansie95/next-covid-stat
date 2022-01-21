import styled from "styled-components";

interface Center {
  w?: string;
  h?: string;
  mt?: string;
}
interface Box {
  m?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  mx?: string;
  my?: string;
  textAlign?: string;
  w?: string;
  bg?: string;
  colStart?: number;
  h?: string;
}

export const StyledBox = styled.div<Box>`
  margin: 0px ${(props) => props.mx};
  margin: ${(props) => props.my} 0px;
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
`;

export const Center = styled.div<Center>`
  display: flex;
  alignitems: center;
  justifycontent: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin-top: ${(props) => props.mt};
`;

export const Wrap = styled(StyledBox)`
  display: flex;
  flex-wrap: wrap;
`;
