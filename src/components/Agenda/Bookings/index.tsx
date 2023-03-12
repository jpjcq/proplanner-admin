import { useContext } from "react";
import BookingCard from "./BookingCard";
import GridLayout from "../GridLayout";
import getCardCoodinates from "../../../utils/getCardCoordinates";
import AgendaContext from "../../../contexts/agenda/agenda-context";
import ParametersContext from "../../../contexts/parameters/parameters-context";
import { Booking } from "../../../types/booking";
import useActiveWeek from "../../../hooks/useActiveWeek";
//To fetch from db
import dummyBookings from "../../../data/dummyBookings";

export default function Bookings() {
  const agendaCtx = useContext(AgendaContext);
  const parametersCtx = useContext(ParametersContext);
  const selectedWeek = useActiveWeek(agendaCtx.selectedDay);
  const thisWeekBookings: Booking[] = [];
  dummyBookings.forEach(
    booking =>
      selectedWeek.contains(booking.serviceTime.start) &&
      thisWeekBookings.push(booking)
  );
  const bookingsToDisplay = thisWeekBookings.map((booking, index) => (
    <BookingCard
      key={index}
      color="cardBlue"
      coordinates={getCardCoodinates(booking, parametersCtx)}
    />
  ));

  return (
    <GridLayout bookingLayoutTimeInterval={5}>{bookingsToDisplay}</GridLayout>
  );
}
