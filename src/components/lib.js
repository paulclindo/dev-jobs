import React from "react";
import loaderImg from "../assets/desktop/loader.svg";
import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 160px);
  img {
    width: 80px;
  }
`;
function Spinner() {
  return (
    <Loader>
      <img src={loaderImg} alt="loader" />
    </Loader>
  );
}
export { Spinner };
