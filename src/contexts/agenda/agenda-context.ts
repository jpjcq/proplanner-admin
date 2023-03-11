import { createContext } from "react";

export type TimeInterval = 15 | 30;

export interface AgendaContextType {
  timeInterval: TimeInterval;
  toogleTimeInterval: () => void;
}

const context: AgendaContextType = {
  timeInterval: 30,
  toogleTimeInterval() {},
};

const AgendaContext = createContext(context);

export default AgendaContext;
