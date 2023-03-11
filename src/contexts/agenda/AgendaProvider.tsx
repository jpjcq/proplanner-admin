import { ReactNode, Reducer, useReducer } from "react";
import AgendaContext, { TimeFrame } from "./agenda-context";

interface StateType {
  timeFrame: TimeFrame;
}

const initialState: StateType = { timeFrame: 30 };

interface ActionType {
  type: string;
}
const agendaReducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case "TOOGLE_TIMEFRAME":
      const newTimeFrame = state.timeFrame === 30 ? 15 : 30;
      return {
        timeFrame: newTimeFrame,
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
    timeFrame: agendaState.timeFrame,
    toogleTimeFrame() {
      dispatchAgendaState({ type: "TOOGLE_TIMEFRAME" });
    },
  };
  return (
    <AgendaContext.Provider value={agendaContext}>
      {children}
    </AgendaContext.Provider>
  );
}
