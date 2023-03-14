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
    service: {
      _id: "P1.1",
      short: "Pose naturelle",
      title: "Pose sans rallongement",
      description:
        "Pose sans rallongement. Couleur incluse, semi-permanent ou gel de couleurs.",
      duration: 80,
      price: 48,
    },
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.fromObject({ hour: 15 }),
      DateTime.fromObject({ hour: 16 })
    ),
    customer: {},
    service: {
      _id: "P1.1",
      short: "Pose naturelle",
      title: "Pose sans rallongement",
      description:
        "Pose sans rallongement. Couleur incluse, semi-permanent ou gel de couleurs.",
      duration: 80,
      price: 48,
    },
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now()
        .plus({ day: 3 })
        .set({ hour: 10, minute: 0, second: 0, millisecond: 0 }),
      DateTime.now()
        .plus({ day: 3 })
        .set({ hour: 11, minute: 0, second: 0, millisecond: 0 })
    ),
    customer: {},
    service: {
      _id: "P2.2",
      title: "Comblage gel tardif (+ de 4 semaines)",
      short: "Comblage gel tardif",
      description:
        "Comblage gel, pour une pose réalisée par mes soins, datant d'il y a plus de 4 semaines. Couleur incluse, semi-permanent ou gel de couleur.",
      duration: 90,
      price: 45,
    },
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now()
        .plus({ day: 3 })
        .set({ hour: 11, minute: 0, second: 0, millisecond: 0 }),
      DateTime.now()
        .plus({ day: 3 })
        .set({ hour: 13, minute: 0, second: 0, millisecond: 0 })
    ),
    customer: {},
    service: {
      _id: "P3.1",
      title: "Pose semi-permanent renforcé",
      short: "Pose semi",
      description: "Pose vernis semi-permanent renforcé.",
      duration: 60,
      price: 35,
    },
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now()
        .plus({ day: 3 })
        .set({ hour: 15, minute: 0, second: 0, millisecond: 0 }),
      DateTime.now()
        .plus({ day: 3 })
        .set({ hour: 16, minute: 0, second: 0, millisecond: 0 })
    ),
    customer: {},
    service: {
      _id: "P4.1",
      title: "Babyboomer/Colors/Glitters",
      short: "Babyboomer/Glitters",
      description: "Pose de Babyboomer/Colors/Glitters",
      duration: 1,
      price: 1,
    },
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.now()
        .plus({ day: 4 })
        .set({ hour: 10, minute: 0, second: 0, millisecond: 0 }),
      DateTime.now()
        .plus({ day: 4 })
        .set({ hour: 11, minute: 0, second: 0, millisecond: 0 })
    ),
    customer: {},
    service: {
      _id: "P4.1",
      title: "Babyboomer/Colors/Glitters",
      short: "Babyboomer/Glitters",
      description: "Pose de Babyboomer/Colors/Glitters",
      duration: 1,
      price: 1,
    },
    note: "",
  },
];

export default dummyBookings;
