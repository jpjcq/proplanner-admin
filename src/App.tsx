import { useState } from "react";
import Agenda from "./components/Agenda";
import Slider from "react-slick";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerList from "./components/CustomerList";

export default function App() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(activeSlide);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setActiveSlide(current);
    },
  };
  return (
    <>
      <Navbar
        onDatePickerClick={setIsDatePickerOpen}
        activeSlide={activeSlide}
      />
      <DatePicker
        isOpen={isDatePickerOpen}
        onDismiss={() => setIsDatePickerOpen(false)}
      />
      <Slider {...settings}>
        <Agenda />
        <CustomerList />
        <Agenda />
      </Slider>
    </>
  );
}
