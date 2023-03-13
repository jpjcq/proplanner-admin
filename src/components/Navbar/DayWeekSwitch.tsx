import { motion } from "framer-motion";
import { useContext, useState } from "react";
import styled from "styled-components";
import AgendaContext, {
  AgendaContextType,
} from "../../contexts/agenda/agenda-context";
import NavButton from "./NavButton";

const SwitchWrapper = styled.div<{ xInterval: AgendaContextType["xInterval"] }>`
  position: relative;
  height: 100%;
  min-width: 178px;
  display: flex;
  justify-content: ${({ xInterval }) =>
    xInterval === "week" ? "flex-end" : "flex-start"};
  align-items: center;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 37px;
  z-index: 1;
`;

const BackgroundButtonLeft = styled.div`
  height: 37px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.policeMedium};
  border: 1px solid ${({ theme }) => theme.colors.borderMedium};
  border-radius: 13px 0 0 13px;
`;

const BackgroundButtonRight = styled.div`
  height: 37px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.policeMedium};
  border: 1px solid ${({ theme }) => theme.colors.borderMedium};
  border-radius: 0 13px 13px 0;
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function DayWeekSwitch() {
  const agendaCtx = useContext(AgendaContext);
  return (
    <SwitchWrapper
      onClick={() =>
        agendaCtx.setXInterval(agendaCtx.xInterval === "week" ? "day" : "week")
      }
      xInterval={agendaCtx.xInterval}
    >
      <NavButton
        style={{ width: "90px", position: "absolute", zIndex: 2 }}
        accent
        layout
        transition={spring}
      >
        {agendaCtx.xInterval === "week" ? "Semaine" : "Jour"}
      </NavButton>
      <BackgroundWrapper>
        <BackgroundButtonLeft>Jour</BackgroundButtonLeft>
        <BackgroundButtonRight>Semaine</BackgroundButtonRight>
      </BackgroundWrapper>
    </SwitchWrapper>
  );
}
