import { useContext } from "react";
import styled from "styled-components";
import SliderContext from "../../contexts/slider/slider-context";
import NavButton from "./NavButton";

const SwitchWrapper = styled.div<{ activeSlide: number }>`
  position: relative;
  height: 100%;
  min-width: 327px;
  display: flex;
  align-items: center;
  ${({ activeSlide }) => {
    let css = "";
    switch (activeSlide) {
      case 0:
        css += `justify-content: flex-start;`;
        return css;
      case 1:
        css += `justify-content: center;`;
        return css;
      case 2:
        css += `justify-content: flex-end;`;
        return css;
    }
  }}
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

const BackgroundButtonMiddle = styled.div`
  height: 37px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.policeMedium};
  border: 1px solid ${({ theme }) => theme.colors.borderMedium};
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

interface PageSwitcherProps {
  goToSlide: (index: number) => void;
}

export default function PageSwitcher({ goToSlide }: PageSwitcherProps) {
  const sliderCtx = useContext(SliderContext);
  return (
    <SwitchWrapper activeSlide={sliderCtx.activeSlider}>
      <NavButton
        style={{ minWidth: "115px", position: "absolute", zIndex: 2 }}
        accent
        layout
        transition={spring}
      >
        {(sliderCtx.activeSlider === 0 && "Agenda") ||
          (sliderCtx.activeSlider === 1 && "Clientes") ||
          (sliderCtx.activeSlider === 2 && "Paramètres")}
      </NavButton>
      <BackgroundWrapper>
        <BackgroundButtonLeft onClick={() => goToSlide(0)}>
          Agenda
        </BackgroundButtonLeft>
        <BackgroundButtonMiddle onClick={() => goToSlide(1)}>
          Clientes
        </BackgroundButtonMiddle>
        <BackgroundButtonRight onClick={() => goToSlide(2)}>
          Paramètres
        </BackgroundButtonRight>
      </BackgroundWrapper>
    </SwitchWrapper>
  );
}
