import { createContext } from "react";

export type TimeFrame = 15 | 30;

const context: { timeFrame: TimeFrame; toogleTimeFrame: () => void } = {
  timeFrame: 30,
  toogleTimeFrame() {},
};

const AgendaContext = createContext(context);

export default AgendaContext;
