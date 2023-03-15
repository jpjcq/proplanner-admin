import { Interval } from "luxon";
import { Customer } from "./customer";
import { SecondaryServices } from "./services";

export interface Booking {
  _id: number;
  serviceTime: Interval;
  customer?: Customer;
  services?: SecondaryServices[];
  note?: string;
  total: number;
}

export type Availability = Interval;
