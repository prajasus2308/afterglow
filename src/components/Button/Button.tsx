/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { InputIcons } from "../InputIcons";

interface Props {
  showIcon: boolean;
  label: string;
  type: "primary" | "secondary";
  stateProp: "hover" | "default";
  size: "big";
  className: any;
}

export const Button = ({
  showIcon = true,
  label = "Button",
  type,
  stateProp,
  size,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "secondary",

    state: stateProp || "default",

    size: size || "big",
  });

  return (
    <div
      className={`inline-flex items-center px-6 py-2.5 relative justify-center rounded-lg gap-1.5 h-11 ${state.state === "default" && state.type === "secondary" ? "border-color-light-250" : (state.type === "secondary" && state.state === "hover") ? "border-color-light-500" : ""} ${state.type === "secondary" ? "bg-color-light-50" : (state.type === "primary" && state.state === "hover") ? "bg-color-primary-500" : "bg-color-primary-100"} ${state.type === "primary" ? "border-[none]" : "border border-solid"} ${state.type === "primary" ? "before:content-['']" : ""} ${state.type === "primary" ? "before:[mask-composite:exclude]" : ""} ${state.type === "primary" ? "before:pointer-events-none" : ""} ${state.type === "primary" ? "before:inset-0" : ""} ${state.type === "primary" ? "before:[background:linear-gradient(180deg,rgba(255,135,71,1)_0%,rgba(23,23,23,0.1)_100%)]" : ""} ${state.type === "primary" ? "before:absolute" : ""} ${state.type === "primary" ? "before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" : ""} ${state.type === "primary" ? "before:rounded-lg" : ""} ${state.type === "primary" ? "before:p-px" : ""} ${state.type === "primary" ? "before:z-[1]" : ""} ${state.type === "primary" ? "before:[-webkit-mask-composite:xor]" : ""} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {showIcon && (
        <InputIcons
          className="!relative !left-[unset] !top-[unset]"
          property1="arrow-up-right"
          propertyArrowUp={
            state.state === "default" && state.type === "secondary"
              ? "https://c.animaapp.com/mjvgih5jVCDc2p/img/input-icons.svg"
              : "https://c.animaapp.com/mjvgih5jVCDc2p/img/input-icons-3.svg"
          }
          size="big"
        />
      )}

      <div
        className={`font-body-SM w-fit mt-[-1.00px] tracking-[var(--body-SM-letter-spacing)] text-[length:var(--body-SM-font-size)] [font-style:var(--body-SM-font-style)] font-[number:var(--body-SM-font-weight)] leading-[var(--body-SM-line-height)] whitespace-nowrap relative ${state.state === "default" && state.type === "secondary" ? "text-color-light-750" : "text-color-light-1000"}`}
      >
        {label}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}
