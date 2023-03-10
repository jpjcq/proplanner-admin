import * as React from "react";
import { styled } from "@mui/material/styles";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateTime } from "luxon";
import { useTheme } from "styled-components";
import { Theme } from "../../theme/colors";

interface CustomPickerDayProps extends PickersDayProps<DateTime> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  styledTheme: Theme;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: prop =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})<CustomPickerDayProps>(
  ({ theme, dayIsBetween, isFirstDay, isLastDay, styledTheme }) => ({
    ...(dayIsBetween && {
      borderRadius: 0,
      backgroundColor: styledTheme.colors.validation.blue,
      color: theme.palette.common.white,
      "&:hover, &:focus": {
        backgroundColor: styledTheme.colors.validation.blue,
      },
    }),
    ...(isFirstDay && {
      backgroundColor: styledTheme.colors.validation.blue,
      color: theme.palette.common.white,
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      "&:hover, &:focus": {
        backgroundColor: styledTheme.colors.validation.blue,
      },
    }),
    ...(isLastDay && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
    ...(!isFirstDay &&
      !isLastDay &&
      !dayIsBetween && {
        color: styledTheme.colors.policeMedium,
      }),
  })
) as React.ComponentType<CustomPickerDayProps>;

function Day(
  props: PickersDayProps<DateTime> & { selectedDay?: DateTime | null }
) {
  const styledTheme = useTheme() as Theme;
  const { day, selectedDay, ...other } = props;

  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const start = selectedDay.startOf("week");
  const end = selectedDay.endOf("week");

  const dayIsBetween = start < day && day < end;
  const isFirstDay = day.hasSame(start, "day");
  const isLastDay = day.hasSame(end, "day");

  return (
    <CustomPickersDay
      {...other}
      day={day}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
      styledTheme={styledTheme}
      style={{ fontWeight: 600 }}
    />
  );
}

interface WeeksDateCalendarProps {
  value: DateTime | null;
  setValue: (value: React.SetStateAction<DateTime | null>) => void;
}

export default function WeeksDateCalendar({
  value,
  setValue,
}: WeeksDateCalendarProps) {
  return (
    <DateCalendar
      value={value}
      onChange={newValue => setValue(newValue)}
      slots={{ day: Day }}
      slotProps={{
        day: {
          selectedDay: value,
        } as any,
      }}
    />
  );
}
