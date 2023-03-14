import styled from "styled-components";
import { CardColor, Theme } from "../../../theme/colors";
import { BigCaption, SmallCaption } from "../../../theme/text";
import { opacify } from "../../../theme/utils";

const Card = styled.div<{ color: CardColor; coordinates: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme, color }) =>
    opacify(25, theme.colors.cardColors[`${color}`])};
  border-radius: 4px;
  margin: 4px;
  padding: 15px 12px;
  grid-area: ${({ coordinates }) => coordinates};
  overflow-x: scroll;
`;

const HoursWrapper = styled.div`
  display: flex;
`;

const Hour = styled.div<{ color: CardColor }>`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  background-color: ${({ theme, color }) =>
    theme.colors.cardColors[`${color}`]};
  border-radius: 4px;
  &:nth-child(n + 2) {
    margin-left: 5px;
  }
`;

interface BookingCardProps {
  color: CardColor;
  coordinates: string;
  onClick: () => void;
}

export default function BookingCard({
  color,
  coordinates,
  onClick,
}: BookingCardProps) {
  return (
    <Card color={color} coordinates={coordinates} onClick={onClick}>
      <HoursWrapper style={{ marginBottom: "7px" }}>
        <Hour color={color}>
          <SmallCaption color={"white"}>09:00</SmallCaption>
        </Hour>
        <Hour color={color}>
          <SmallCaption color={"white"}>11:00</SmallCaption>
        </Hour>
      </HoursWrapper>
      <BigCaption color={"policeBlack"} style={{ marginBottom: "7px" }}>
        Joséphine Pinot
      </BigCaption>
      <SmallCaption fontWeight={700} style={{ marginBottom: "7px" }}>
        Comblage gel tardif
      </SmallCaption>
      <span>
        <SmallCaption color={"policeBlack"} fontWeight={700}>
          Note:{" "}
        </SmallCaption>
        <SmallCaption fontWeight={600}>Attention super connasse!</SmallCaption>
      </span>
    </Card>
  );
}
