import styled from "styled-components";
import Clock from "../Icons/Clock";
import GridLayout from "./GridLayout";

const Line = styled.div`
  &:nth-child(even) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
    grid-column: 2 / span last;
  }
  &:nth-child(odd) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderMedium};
    grid-column: 1 / span last;
  }
`;

const Column = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.borderMedium};
  grid-row: 1 / span last;
`;

const ClockWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: center;
  align-self: center;
`;

interface GridBackgroundProps {
  columns: number;
  lines: number;
}

export default function GridBackground({
  columns,
  lines,
}: GridBackgroundProps) {
  const linesArray = Array.from({ length: lines }, (_, index) =>
    index === lines - 1 ? (
      <Line key={index} style={{ border: "none" }} />
    ) : (
      <Line key={index} />
    )
  );
  const columnsArray = Array.from({ length: columns }, (_, index) =>
    index === columns - 1 ? (
      <Column key={index} style={{ border: "none" }} />
    ) : (
      <Column key={index} />
    )
  );

  return (
    <>
      <GridLayout>{linesArray}</GridLayout>
      <GridLayout>{columnsArray}</GridLayout>
      <GridLayout>
        <ClockWrapper>
          <Clock />
        </ClockWrapper>
      </GridLayout>
    </>
  );
}
