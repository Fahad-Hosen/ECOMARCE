import FlashSaleItem from "../common/components/FlashSaleItem";
import { useState, useEffect, useRef } from "react";
import RedTitle from "../common/components/RedTitle";
import Arrows from "../common/components/Arrows";
import ViewAll from "../common/components/ViewAll";
import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";
import { ITEMS } from "../common/functions/items";

const FlashSale = () => {
  // State to store the time left until the deadline
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2025-12-31T23:59:59")) // Set the deadline to December 31, 2025
  );

  // Reference to the container of the sale items for controlling scrolling
  const saleItemsRef = useRef(null);

  // Filtering the items to show only discounted ones
  const saleItems = ITEMS.filter((item) => item.discount !== "");

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date("2025-12-31T23:59:59")));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to handle left arrow click (scroll left)
  const handleLeftClick = () => {
    if (saleItemsRef.current) {
      saleItemsRef.current.scrollBy({
        left: -300,  // Scroll left by 300px
        behavior: 'smooth'  // Smooth scrolling animation
      });
    }
  };

  // Function to handle right arrow click (scroll right)
  const handleRightClick = () => {
    if (saleItemsRef.current) {
      saleItemsRef.current.scrollBy({
        left: 300,  // Scroll right by 300px
        behavior: 'smooth'  // Smooth scrolling animation
      });
    }
  };

  return (
    <div className="p-4">
      {/* Title Section */}
      <RedTitle title={i18n.t("homeSections.row2.0")} />

      {/* Timer and Header Section */}
      <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            {i18n.t("homeSections.row2.1")}
          </h2>

          {/* Timer Section */}
          <div className="flex items-center justify-center gap-12">
            {/* Days Section */}
            <div className="text-center">
              <span className="block text-xs font-semibold uppercase tracking-wide text-black mb-1">
                {i18n.t("homeSections.row2.2")} {/* Days label */}
              </span>
              <span className="text-3xl font-extrabold text-black">
                {timeLeft.days}
              </span>
            </div>
            <span className="text-3xl font-bold text-red-400">:</span>

            {/* Hours Section */}
            <div className="text-center">
              <span className="block text-xs font-semibold uppercase tracking-wide text-black mb-1">
                {i18n.t("homeSections.row2.3")} {/* Hours label */}
              </span>
              <span className="text-3xl font-extrabold text-black">
                {timeLeft.hours}
              </span>
            </div>
            <span className="text-3xl font-bold text-red-400">:</span>

            {/* Minutes Section */}
            <div className="text-center">
              <span className="block text-xs font-semibold uppercase tracking-wide text-black mb-1">
                {i18n.t("homeSections.row2.4")} {/* Minutes label */}
              </span>
              <span className="text-3xl font-extrabold text-black">
                {timeLeft.minutes}
              </span>
            </div>
            <span className="text-3xl font-bold text-red-400">:</span>

            {/* Seconds Section */}
            <div className="text-center">
              <span className="block text-xs font-semibold uppercase tracking-wide text-black mb-1">
                {i18n.t("homeSections.row2.5")} {/* Seconds label */}
              </span>
              <span className="text-3xl font-extrabold text-black">
                {timeLeft.seconds}
              </span>
            </div>
          </div>
        </div>
        {/* Arrows Section */}
        <Arrows 
          onLeftClick={handleLeftClick}  // Pass the left scroll function
          onRightClick={handleRightClick} // Pass the right scroll function
        />
      </div>

      {/* Sale Items Section */}
      <div
        className="scrollbar relative md:overflow-x-hidden hover:overflow-scroll overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px]"
        ref={saleItemsRef} // Attach the ref to control scrolling
      >
        {saleItems.map((item, index) => (
          <FlashSaleItem
            key={item.id}
            item={item}
            index={index}
            totalItems={saleItems.length}
            stars={item.stars}
            rates={item.rates}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-4">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>

      {/* Divider */}
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </div>
  );
};

export default FlashSale;
