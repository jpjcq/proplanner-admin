import { ReactNode, useState } from "react";
import SliderContext from "./slider-context";

export default function SliderProvider({ children }: { children: ReactNode }) {
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderContext = {
    activeSlider: activeSlider,
    setActiveSlider(index: number) {
      setActiveSlider(index);
    },
  };
  return (
    <SliderContext.Provider value={sliderContext}>
      {children}
    </SliderContext.Provider>
  );
}
