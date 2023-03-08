import styled from "styled-components";
import GridBackground from "./GridBackground";

const RelativeWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 20px;
  height: 730px;
`;



export default function Agenda() {
  return (
    <RelativeWrapper>
      <GridBackground columns={6} lines={21} />
    </RelativeWrapper>
  );
}
