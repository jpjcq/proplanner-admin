import { DateTime } from "luxon";
import { createContext } from "react";

export type TimeInterval = 15 | 30;

export interface AgendaContextType {
  selectedDay: DateTime;
  setSelectedDay: (day: DateTime) => void;
  timeInterval: TimeInterval;
  toogleTimeInterval: () => void;
  xInterval: "day" | "week";
  setXInterval: (interval: "day" | "week") => void;
}

const context: AgendaContextType = {
  selectedDay: DateTime.now(),
  setSelectedDay() {},
  timeInterval: 30,
  toogleTimeInterval() {},
  xInterval: "week",
  setXInterval() {},
};

const AgendaContext = createContext(context);

export default AgendaContext;
