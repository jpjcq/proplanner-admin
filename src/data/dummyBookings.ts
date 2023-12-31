import { DateTime, Interval } from "luxon";
import { Booking } from "../types/booking";

const dummyBookings: Booking[] = [
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.fromObject({ hour: 11 }),
      DateTime.fromObject({ hour: 13 })
    ),
    customer: {
      name: "Pinot Josephine",
      tel: "06 17 85 20 76",
      mail: "pinot.josephine@gmail.com",
    },
    services: [
      {
        _id: "P1.1",
        short: "Pose naturelle",
        title: "Pose sans rallongement",
        description:
          "Pose sans rallongement. Couleur incluse, semi-permanent ou gel de couleurs.",
        duration: 80,
        price: 48,
      },
    ],
    total: 48,
    note: "",
  },
  {
    _id: 70986554654589,
    serviceTime: Interval.fromDateTimes(
      DateTime.fromObject({ hour: 15 }),
      DateTime.fromObject({ hour: 16 })
    ),
    customer: {
      name: "Dupont Laura",
      tel: "06 99 99 99 99",
      mail: "Dupont.laura@gmail.com",
    },
    services: [
      {
        _id: "P1.1",
        short: "Pose naturelle",
        title: "Pose sans rallongement",
        description:
          "Pose sans rallongement. Couleur incluse, semi-permanent ou gel de couleurs.",
        duration: 80,
        price: 48,
      },
    ],
    total: 48,
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
    customer: {
      name: "Lasalle Mikaela",
      tel: "06 88 88 88 88",
      mail: "lasalle.mikaela@gmail.com",
    },
    services: [
      {
        _id: "P2.2",
        title: "Comblage gel tardif (+ de 4 semaines)",
        short: "Comblage gel tardif",
        description:
          "Comblage gel, pour une pose réalisée par mes soins, datant d'il y a plus de 4 semaines. Couleur incluse, semi-permanent ou gel de couleur.",
        duration: 90,
        price: 45,
      },
    ],
    total: 45,
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
    customer: {
      name: "Georgette Dupont",
      tel: "06 17 85 20 76",
      mail: "georgette.dupont@gmail.com",
    },
    services: [
      {
        _id: "P3.1",
        title: "Pose semi-permanent renforcé",
        short: "Pose semi",
        description: "Pose vernis semi-permanent renforcé.",
        duration: 60,
        price: 35,
      },
      {
        _id: "P4.2",
        title: "French classique ou colorée",
        short: "French manucure",
        description: "Pose d'une french classique ou colorée",
        duration: 1,
        price: 1,
      },
      {
        _id: "P4.2",
        title: "French classique ou colorée",
        short: "French manucure",
        description: "Pose d'une french classique ou colorée",
        duration: 1,
        price: 1,
      },
    ],
    total: 37,
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
    customer: {
      name: "Claire Delarue",
      tel: "06 17 85 20 76",
      mail: "claire.delarue@gmail.com",
    },
    services: [
      {
        _id: "P4.1",
        title: "Babyboomer/Colors/Glitters",
        short: "Babyboomer/Glitters",
        description: "Pose de Babyboomer/Colors/Glitters",
        duration: 1,
        price: 1,
      },
    ],
    total: 1,
    note: "Attention super radine!",
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
    customer: {
      name: "Chantal Goya",
      tel: "06 17 85 20 76",
      mail: "goya.chantal@gmail.com",
    },
    services: [
      {
        _id: "P4.1",
        title: "Babyboomer/Colors/Glitters",
        short: "Babyboomer/Glitters",
        description: "Pose de Babyboomer/Colors/Glitters",
        duration: 1,
        price: 1,
      },
    ],
    total: 1,
    note: "Attention radine!",
  },
];

export default dummyBookings;
