import styled from "styled-components";
import { CardColor } from "../../../theme/colors";
import { BigCaption, SmallCaption } from "../../../theme/text";
import { opacify } from "../../../theme/utils";
import { Booking } from "../../../types/booking";

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
  booking: Booking;
}

export default function BookingCard({
  color,
  coordinates,
  onClick,
  booking,
}: BookingCardProps) {
  const servicesList = booking.services?.map((service, index) => (
    <SmallCaption key={index} fontWeight={700} style={{ marginBottom: "7px" }}>
      {service.short}
    </SmallCaption>
  ));
  return (
    <Card color={color} coordinates={coordinates} onClick={onClick}>
      <HoursWrapper style={{ marginBottom: "7px" }}>
        <Hour color={color}>
          <SmallCaption color={"white"}>
            {booking.serviceTime.start.hour}:{booking.serviceTime.start.minute}
            {booking.serviceTime.start.minute === 0 ? 0 : ""}
          </SmallCaption>
        </Hour>
        <Hour color={color}>
          <SmallCaption color={"white"}>
            {booking.serviceTime.end.hour}:{booking.serviceTime.end.minute}
            {booking.serviceTime.end.minute === 0 ? 0 : ""}
          </SmallCaption>
        </Hour>
      </HoursWrapper>
      <BigCaption color={"policeBlack"} style={{ marginBottom: "7px" }}>
        {booking.customer?.name}
      </BigCaption>
      {servicesList}
      <span>
        <SmallCaption color={"policeBlack"} fontWeight={700}>
          Note:{" "}
        </SmallCaption>
        <SmallCaption fontWeight={600}>{booking.note}</SmallCaption>
      </span>
    </Card>
  );
}
