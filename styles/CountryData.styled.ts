import styled from "styled-components";

interface CenterMap {
  mb?: string;
  mx?: string;
  w?: string;
  bg?: string;
}

export const Box = styled.div``;

export const CenterMap = styled.div<CenterMap>`
  display: flex;
  alignitems: center;
  justifycontent: center;
  margin: 0px ${(props) => props.mx};
  width: ${(props) => props.w};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background: ${(props) => props.bg};
  margin-bottom: ${(props) => props.mb};
  border-radius: 3%;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  alig-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
