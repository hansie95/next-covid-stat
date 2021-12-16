import styled from "styled-components";
import SpinPicture from "../components/SpinPicture";

export const Picture = styled(SpinPicture)`
  width: ${(props) => props.width}
  height: ${(props) => props.height}
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  animation-name: spin;
  animation-duration: 11000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
