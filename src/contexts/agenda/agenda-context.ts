import { DateTime } from "luxon";
import { createContext } from "react";

export type TimeInterval = 15 | 30;

export interface AgendaContextType {
  selectedDay: DateTime;
  setSelectedDay: (day: DateTime) => void,
  timeInterval: TimeInterval;
  toogleTimeInterval: () => void;
}

const context: AgendaContextType = {
  selectedDay: DateTime.now(),
  setSelectedDay() {},
  timeInterval: 30,
  toogleTimeInterval() {},
};

const AgendaContext = createContext(context);

export default AgendaContext;
