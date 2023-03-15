import { createContext } from "react";

const context = {
  activeSlider: 0,
  setActiveSlider(index: number) {},
};

const SliderContext = createContext(context);

export default SliderContext;
