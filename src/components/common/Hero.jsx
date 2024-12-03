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
          ? " bg-red-500 rounded-b-[33px]"
            : " bg-[#01A4FFBD]"
        } flex items-center justify-center min-h-screen flex-col`}
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
