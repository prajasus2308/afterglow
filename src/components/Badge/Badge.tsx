/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { InputIcons } from "../InputIcons";

interface Props {
  showIcon: boolean;
  label: string;
  state: "default";
  className: any;
  inputIconsPropertyZapSize: string;
  inputIconsProperty1: string;
}

export const Badge = ({
  showIcon = true,
  label = "Bring multiple screens from Figma",
  state,
  className,
  inputIconsPropertyZapSize,
  inputIconsProperty1 = "user",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex h-8 items-center justify-center gap-1 px-3 py-1.5 relative bg-color-primary-100 rounded-3xl border border-solid border-color-primary-100 ${className}`}
    >
      {showIcon && (
        <InputIcons
          className="!relative !left-[unset] !top-[unset]"
          img={inputIconsPropertyZapSize}
          property1={inputIconsProperty1}
          propertyUserSize="https://c.animaapp.com/mjvgih5jVCDc2p/img/input-icons-6.svg"
          size="medium"
        />
      )}

      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
        <p className="relative w-fit mt-[-1.00px] font-body-XS font-[number:var(--body-XS-font-weight)] text-color-light-1000 text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] whitespace-nowrap [font-style:var(--body-XS-font-style)]">
          {label}
        </p>
      </div>
    </div>
  );
};
