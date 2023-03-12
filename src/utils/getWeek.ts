import { DateTime, Interval } from "luxon";

/**
 * Get an Interval of a day's containing week
 * @param {DateTime} day - The actual day we want the week.
 * @returns {Interval} - Luxon Interval of the week containing the day.
 */
export default function getWeek(day: DateTime): Interval {
  const startOfWeek = day.startOf("week");
  const endOfWeek = day.endOf("week");
  const actualWeek = Interval.fromDateTimes(startOfWeek, endOfWeek);
  return actualWeek;
}
