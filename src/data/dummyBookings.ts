import { DateTime, Interval } from "luxon";
import { Booking } from "../types/booking";

const dummyBookings: Booking[] = [
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.fromObject({ hour: 11 }),
      DateTime.fromObject({ hour: 13 })
    ),
    customer: {},
    service: "",
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.fromObject({ hour: 15 }),
      DateTime.fromObject({ hour: 16 })
    ),
    customer: {},
    service: "",
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now().plus({ day: 3 }).set({ hour: 10, minute: 0, second: 0, millisecond:0 }),
      DateTime.now().plus({ day: 3 }).set({ hour: 11, minute: 0, second: 0, millisecond:0 })
    ),
    customer: {},
    service: "",
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now().plus({ day: 3 }).set({ hour: 11, minute: 0, second: 0, millisecond:0 }),
      DateTime.now().plus({ day: 3 }).set({ hour: 13, minute: 0, second: 0, millisecond:0 })
    ),
    customer: {},
    service: "",
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now().plus({ day: 3 }).set({ hour: 15, minute: 0, second: 0, millisecond:0 }),
      DateTime.now().plus({ day: 3 }).set({ hour: 16, minute: 0, second: 0, millisecond:0 })
    ),
    customer: {},
    service: "",
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now().plus({ day: 4 }).set({ hour: 10, minute: 0, second: 0, millisecond:0 }),
      DateTime.now().plus({ day: 4 }).set({ hour: 11, minute: 0, second: 0, millisecond:0 })
    ),
    customer: {},
    service: "",
    note: "",
  },
];

export default dummyBookings;

// todo: last crenel => 17h chablon, 18h semi (pour finir a 19h)
