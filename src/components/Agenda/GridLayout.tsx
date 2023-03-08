import styled from "styled-components";

const GridLayout = styled.div`
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 67px repeat(5, 1fr);
  grid-template-rows: 64px repeat(20, 1fr);
`;

export default GridLayout;
