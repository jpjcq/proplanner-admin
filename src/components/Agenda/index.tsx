import styled from "styled-components";
import Background from "./Background";
import BookingCards from "./BookingCards";

const RelativeWrapper = styled.div`
  height: 730px;
  position: relative;
  margin: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

export default function Agenda() {
  return (
    <RelativeWrapper>
      <Background />
      {/* <BookingCards /> */}
    </RelativeWrapper>
  );
}
