import { DAY } from "../constants/agenda";

export default function getWeekDayNumber(day: DAY) {
  switch (day) {
    case "lundi":
      return 1;
    case "mardi":
      return 2;
    case "mercredi":
      return 3;
    case "jeudi":
      return 4;
    case "vendredi":
      return 5;
    case "samedi":
      return 6;
    case "dimanche":
      return 7;
  }
}
