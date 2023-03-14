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
import { Interval } from "luxon";

export default function Bookings() {
  const agendaCtx = useContext(AgendaContext);
  const parametersCtx = useContext(ParametersContext);
  const selectedDayInterval = Interval.fromDateTimes(
    agendaCtx.selectedDay.startOf("day"),
    agendaCtx.selectedDay.endOf("day")
  );
  const selectedWeek = useActiveWeek(agendaCtx.selectedDay);
  const thisIntervalBookings: Booking[] = [];
  const cardColors = parametersCtx.cardColors;
  dummyBookings.forEach(booking =>
    agendaCtx.xInterval === "week"
      ? selectedWeek.contains(booking.serviceTime.start) &&
        thisIntervalBookings.push(booking)
      : selectedDayInterval.contains(booking.serviceTime.start) &&
        thisIntervalBookings.push(booking)
  );
  const bookingsToDisplay = thisIntervalBookings.map((booking, index) => (
    <BookingCard
      key={index}
      color={cardColors[`${booking.service?._id.substring(0, 2)}`]}
      coordinates={getCardCoodinates(booking, parametersCtx, agendaCtx)}
    />
  ));

  return (
    <GridLayout bookingLayoutTimeInterval={5}>{bookingsToDisplay}</GridLayout>
  );
}
