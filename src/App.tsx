import { useContext, useRef, useState } from "react";
import Agenda from "./components/Agenda";
import Slider from "react-slick";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerList from "./components/CustomerList";
import SliderContext from "./contexts/slider/slider-context";
import CreateCustomerModal from "./components/CustomerList/CreateCustomerModal";
import Parameters from "./components/Parameters";

export default function App() {
  const [searchBarContent, setSearchBarContent] = useState("");
  const [isCreateCustomerOpen, setIsCreateCustomerOpen] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const sliderCtx = useContext(SliderContext);
  const goToSlide = (index: number): void => {
    sliderRef.current?.slickGoTo(index);
    sliderCtx.setActiveSlider(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      sliderCtx.setActiveSlider(current);
    },
  };

  return (
    <>
      <Navbar
        onOpenCreateCustomer={setIsCreateCustomerOpen}
        goToSlide={goToSlide}
        searchBarContent={setSearchBarContent}
      />
      <Slider {...settings} ref={sliderRef}>
        <Agenda />
        <CustomerList searchBarContent={searchBarContent} />
        <Parameters />
      </Slider>
    </>
  );
}
