import styled from "styled-components";
import Background from "./Background";
import Bookings from "./Bookings";

const RelativeWrapper = styled.div`
  height: 728px;
  position: relative;
  margin: 0 14px 14px 14px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadowMedium.outset};
  border-radius: 20px;
`;

export default function Agenda() {
  return (
    <RelativeWrapper>
      <Background />
      <Bookings />
    </RelativeWrapper>
  );
}
