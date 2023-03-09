import { createContext } from "react";
import { Interval, DateTime } from "luxon";
import { DAY } from "../../constants/agenda";

const context: {
  openingHours: Interval;
  daysOff: DAY[];
  timeFrame: 15 | 30;
} = {
  openingHours: Interval.fromDateTimes(
    DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
    DateTime.now().set({ hour: 24, minute: 0, second: 0, millisecond: 0 })
  ),
  daysOff: [],
  timeFrame: 30
};

export type ParametersContextType = typeof context;

const ParametersContext = createContext(context);

export default ParametersContext;
