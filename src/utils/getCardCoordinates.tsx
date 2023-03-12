import { Interval } from "luxon";
import { Booking } from "../types/booking";
import { ParametersContextType } from "../contexts/parameters/parameters-context";
import { DAYS_LIST } from "../constants/agenda";

/**
 * Get the "grid-area" coordinates for a booking
 * @param {Booking} booking - The booking we want the coordinates for.
 * @param {ParametersContextType} parametersCtx - The parameters context.
 * @returns {string} - The "grid-arrea" coordinates.
 */
export default function getCardCoodinates(
  booking: Booking,
  parametersCtx: ParametersContextType
): string {
  const bookingStart = booking.serviceTime.start;
  const bookingEnd = booking.serviceTime.end;
  const openingHour = bookingStart.set({
    hour: parametersCtx.openingHours.start.hour,
    minute: parametersCtx.openingHours.start.minute,
  });

  const bookingDay = booking.serviceTime.start.weekdayLong;
  const activeDays = DAYS_LIST.filter(day =>
    parametersCtx.daysOff.every(weekendDay => day !== weekendDay)
  );

  const startColumn = activeDays.findIndex(day => day === bookingDay) + 2;
  const endColumn = startColumn + 1;

  const startRow =
    Interval.fromDateTimes(openingHour, bookingStart).length("minute") / 5 + 2;
  const endRow =
    Interval.fromDateTimes(openingHour, bookingEnd).length("minute") / 5 + 2;

  return `${startRow} / ${startColumn} / ${endRow} / ${endColumn}`;
}
