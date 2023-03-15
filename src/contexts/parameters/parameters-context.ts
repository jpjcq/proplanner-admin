import { createContext } from "react";
import { Interval, DateTime } from "luxon";
import { DAY } from "../../constants/agenda";
import { CardColor } from "../../theme/colors";

export type CardColorsKey = "P1" | "P2" | "P3" | "P4";

export interface ParametersContextType {
  openingHours: Interval;
  daysOff: DAY[];
  cardColors: {
    [key: string]: CardColor;
    P1: CardColor;
    P2: CardColor;
    P3: CardColor;
    P4: CardColor;
    MULTIPLE: CardColor;
    DEFAULT: CardColor;
  };
}

const context: ParametersContextType = {
  openingHours: Interval.fromDateTimes(
    DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
    DateTime.now().set({ hour: 24, minute: 0, second: 0, millisecond: 0 })
  ),
  daysOff: [],
  cardColors: {
    P1: "cardBlue",
    P2: "cardGreen",
    P3: "cardOrange",
    P4: "cardYellow",
    MULTIPLE: "cardPurple",
    DEFAULT: "cardDefault"
  },
};

const ParametersContext = createContext(context);

export default ParametersContext;
