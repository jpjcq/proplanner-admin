import { ReactNode, Reducer, useReducer } from "react";
import AgendaContext, { TimeInterval } from "./agenda-context";

interface StateType {
  timeInterval: TimeInterval;
}

const initialState: StateType = { timeInterval: 30 };

interface ActionType {
  type: string;
}
const agendaReducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case "TOOGLE_TIMEINTERVAL":
      const newTimeInterval = state.timeInterval === 30 ? 15 : 30;
      return {
        timeInterval: newTimeInterval,
      };
    default:
      return state;
  }
};

export default function AgendaProvider({ children }: { children: ReactNode }) {
  const [agendaState, dispatchAgendaState] = useReducer(
    agendaReducer,
    initialState
  );
  const agendaContext = {
    timeInterval: agendaState.timeInterval,
    toogleTimeInterval() {
      dispatchAgendaState({ type: "TOOGLE_TIMEINTERVAL" });
    },
  };
  return (
    <AgendaContext.Provider value={agendaContext}>
      {children}
    </AgendaContext.Provider>
  );
}
