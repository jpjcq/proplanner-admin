import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateTime } from "luxon";
import { useTheme } from "styled-components";
import { Theme } from "../../theme/colors";
import AgendaContext from "../../contexts/agenda/agenda-context";

interface CustomPickerDayProps extends PickersDayProps<DateTime> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  styledtheme: Theme;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: prop =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})<CustomPickerDayProps>(
  ({ theme, dayIsBetween, isFirstDay, isLastDay, styledtheme }) => ({
    ...(dayIsBetween && {
      borderRadius: 0,
      backgroundColor: styledtheme.colors.validation.blue,
      color: theme.palette.common.white,
      "&:hover, &:focus": {
        backgroundColor: styledtheme.colors.validation.blue,
      },
    }),
    ...(isFirstDay && {
      backgroundColor: styledtheme.colors.validation.blue,
      color: theme.palette.common.white,
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      "&:hover, &:focus": {
        backgroundColor: styledtheme.colors.validation.blue,
      },
    }),
    ...(isLastDay && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
    ...(!isFirstDay &&
      !isLastDay &&
      !dayIsBetween && {
        color: styledtheme.colors.policeMedium,
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
      styledtheme={styledTheme}
      style={{ fontWeight: 600 }}
    />
  );
}

export default function WeeksDateCalendar() {
  const agendaCtx = useContext(AgendaContext);
  return (
    <DateCalendar
      value={agendaCtx.selectedDay}
      onChange={newValue => agendaCtx.setSelectedDay(newValue as DateTime)}
      slots={{ day: Day }}
      slotProps={{
        day: {
          selectedDay: agendaCtx.selectedDay,
        } as any,
      }}
    />
  );
}
