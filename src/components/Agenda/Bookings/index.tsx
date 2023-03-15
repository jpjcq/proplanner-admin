import { useContext, useState } from "react";
import BookingCard from "./BookingCard";
import GridLayout from "../GridLayout";
import getCardCoodinates from "../../../utils/getCardCoordinates";
import AgendaContext from "../../../contexts/agenda/agenda-context";
import ParametersContext from "../../../contexts/parameters/parameters-context";
import { Booking } from "../../../types/booking";
import useActiveWeek from "../../../hooks/useActiveWeek";
//To fetch from db
import dummyBookings from "../../../data/dummyBookings";
import { Interval } from "luxon";
import BookingCardModal from "./BookingCardModal";
import { CardColor } from "../../../theme/colors";

export default function Bookings() {
  const agendaCtx = useContext(AgendaContext);
  const parametersCtx = useContext(ParametersContext);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [bookingOpened, setBookingOpened] = useState<Booking>();
  const selectedDayInterval = Interval.fromDateTimes(
    agendaCtx.selectedDay.startOf("day"),
    agendaCtx.selectedDay.endOf("day")
  );
  const selectedWeek = useActiveWeek(agendaCtx.selectedDay);
  const thisIntervalBookings: Booking[] = [];
  dummyBookings.forEach(booking =>
    agendaCtx.xInterval === "week"
      ? selectedWeek.contains(booking.serviceTime.start) &&
        thisIntervalBookings.push(booking)
      : selectedDayInterval.contains(booking.serviceTime.start) &&
        thisIntervalBookings.push(booking)
  );
  const handleClick = (booking: Booking) => {
    setIsCardModalOpen(true);
    setBookingOpened(booking);
  };
  const bookingsToDisplay = thisIntervalBookings.map(
    (booking, index, array) => {
      let color: CardColor;
      if (booking.services && booking.services.length === 1) {
        color =
          parametersCtx.cardColors[
            `${booking.services?.[0]?._id?.substring(0, 2)}`
          ];
      } else if (booking.services && booking.services.length > 1) {
        color = parametersCtx.cardColors["MULTIPLE"];
      } else {
        color = parametersCtx.cardColors["DEFAULT"];
      }
      return (
        <BookingCard
          key={index}
          color={color}
          coordinates={getCardCoodinates(booking, parametersCtx, agendaCtx)}
          onClick={() => handleClick(booking)}
          booking={booking}
        />
      );
    }
  );

  return (
    <>
      <GridLayout bookingLayoutTimeInterval={5}>{bookingsToDisplay}</GridLayout>
      <BookingCardModal
        isOpen={isCardModalOpen}
        onDismiss={() => setIsCardModalOpen(false)}
        openedBooking={bookingOpened as Booking}
      />
    </>
  );
}
