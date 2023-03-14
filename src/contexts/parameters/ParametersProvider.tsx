import { Interval, DateTime } from "luxon";
import { ReactNode } from "react";
import ParametersContext, { ParametersContextType } from "./parameters-context";

export default function ParametersProvider({
  children,
}: {
  children: ReactNode;
}) {
  const parametersContext: ParametersContextType = {
    openingHours: Interval.fromDateTimes(
      DateTime.now().set({ hour: 9, minute: 0, second: 0, millisecond: 0 }),
      DateTime.now().set({ hour: 19, minute: 0, second: 0, millisecond: 0 })
    ),
    daysOff: ["dimanche", "lundi"],
    cardColors: {
      P1: "cardBlue",
      P2: "cardGreen",
      P3: "cardOrange",
      P4: "cardYellow"
    }
  };

  return (
    <ParametersContext.Provider value={parametersContext}>
      {children}
    </ParametersContext.Provider>
  );
}
