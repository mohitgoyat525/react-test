import React from "react";
import CommonHeading from "./CommonHeading";
import CommonWhiteText from "./CommonWhiteText";
import { useLocation } from "react-router-dom";
import Input from "../home/Input";
import Button from "../home/Button";

const Hero = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div
        className={`${
          location === "/"
            ? "flex items-center justify-center bg-red-500 min-h-screen flex-col rounded-es-[33px] rounded-b-[33px]"
            : "flex items-center justify-center bg-[#01A4FFBD] min-h-screen flex-col"
        }`}
      >
        <CommonHeading
          HeroSectionHeading={
            "Lorem ipsum dolor sit amet consectetur. Sceleris"
          }
        />
        ,
        <CommonWhiteText
          CommonParaText={
            "Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis."
          }
        />
        {location === "/" ? <Input /> : <Button />}
      </div>
    </>
  );
};

export default Hero;
