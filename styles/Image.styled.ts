import styled, { keyframes } from "styled-components";
interface icon {
  mr?: string;
  ml?: string;
  w?: string;
}
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
}`;

export const SpinImage = styled.img`
  animation-name: ${rotate};
  animation-duration: 11000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  min-width: 100px;
  min-height: 100px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Image = styled.img<icon>`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  width: ${(props) => props.w};
  height: ${(props) => props.w};
`;
