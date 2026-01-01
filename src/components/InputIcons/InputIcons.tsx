/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  property1:
    | "chevron-down"
    | "arrow-up-right"
    | "user"
    | "menu"
    | "layers"
    | "zap";
  size: "medium" | "big";
  className: any;
  propertyMenuSize: string;
  propertyChevron: string;
  propertyUserSize: string;
  propertyArrowUp: string;
  propertyZapSize: string;
  img: string;
}

export const InputIcons = ({
  property1,
  size,
  className,
  propertyMenuSize = "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-menu--size-big.svg",
  propertyChevron = "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-chevron-down--size-big.svg",
  propertyUserSize = "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-user--size-medium.svg",
  propertyArrowUp = "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-arrow-up-right--size-big.svg",
  propertyZapSize = "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-zap--size-big.svg",
  img = "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-zap--size-medium.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`left-0 top-0 absolute ${size === "big" ? "w-6" : "w-[18px]"} ${size === "big" ? "h-6" : "h-[18px]"} ${className}`}
      alt="Property user size"
      src={
        property1 === "user"
          ? propertyUserSize
          : property1 === "zap" && size === "medium"
            ? img
            : property1 === "layers"
              ? "https://c.animaapp.com/mjvgih5jVCDc2p/img/property-1-layers--size-big.svg"
              : property1 === "arrow-up-right"
                ? propertyArrowUp
                : property1 === "menu"
                  ? propertyMenuSize
                  : property1 === "chevron-down"
                    ? propertyChevron
                    : propertyZapSize
      }
    />
  );
};
