import { DateTime } from "luxon";
import { ReactNode, Reducer, useReducer } from "react";
import AgendaContext, { TimeInterval } from "./agenda-context";

interface StateType {
  timeInterval: TimeInterval;
  selectedDay: DateTime;
}

const initialState: StateType = {
  timeInterval: 30,
  selectedDay: DateTime.now(),
};

interface ActionType {
  type: string;
  payload?: DateTime;
}
const agendaReducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case "TOOGLE_TIMEINTERVAL":
      const newTimeInterval = state.timeInterval === 30 ? 15 : 30;
      return {
        ...state,
        timeInterval: newTimeInterval,
      };
    case "SET_SELECTED_DAY":
      return {
        ...state,
        selectedDay: action.payload as DateTime,
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
    selectedDay: agendaState.selectedDay,
    setSelectedDay(day: DateTime) {
      dispatchAgendaState({ type: "SET_SELECTED_DAY", payload: day });
    },
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
