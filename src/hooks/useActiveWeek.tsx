import { DateTime, Interval } from "luxon";
import { useContext } from "react";
import ParametersContext from "../contexts/parameters/parameters-context";
import { DAYS_LIST } from "../constants/agenda";
import getWeekDayNumber from "../utils/getWeekDayNumber";

/**
 * Returns a week of active days according to days off.
 * @param {DateTime} day - The day we want the week of.
 * @returns {Interval} - Luxon Interval of the active week.
 */
export default function useActiveWeek(day: DateTime): Interval {
  const daysOff = useContext(ParametersContext).daysOff;
  const activeDays = DAYS_LIST.filter(day =>
    daysOff.every(weekendDay => day !== weekendDay)
  );

  const startOfWeek = day
    .startOf("week")
    .set({ weekday: getWeekDayNumber(activeDays[0]) });
  const endOfWeek = day
    .endOf("week")
    .set({ weekday: getWeekDayNumber(activeDays[activeDays.length - 1]) });
  const actualWeek = Interval.fromDateTimes(startOfWeek, endOfWeek);
  return actualWeek;
}
