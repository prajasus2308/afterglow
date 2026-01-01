/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { InputIcons } from "../InputIcons";

interface Props {
  showIcon: boolean;
  property1: "vertical";
  className: any;
  text: string;
  text1: string;
  imagePlaceholderClassName: any;
  imagePlaceholder: string;
}

export const FeaturesCard = ({
  showIcon = true,
  property1,
  className,
  text = "Integration Ecosystem",
  text1 = "Automate tasks, generate insights, and assist your team with a powerful AI agent designed to adapt to your needs.",
  imagePlaceholderClassName,
  imagePlaceholder = "https://c.animaapp.com/mjvgih5jVCDc2p/img/image-placeholder.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-80 items-start gap-[var(--spacing-spacing-xl)] pt-[var(--spacing-spacing-xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] relative bg-color-light-50 rounded-[var(--spacing-corner-radius-xl)] overflow-hidden border border-solid border-color-light-250 transition-all duration-300 hover:border-color-primary-500 hover:shadow-lg hover:shadow-color-primary-100 hover:-translate-y-1 group ${className}`}
    >
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {showIcon && (
          <div className="inline-flex items-center gap-2.5 p-4 relative flex-[0_0_auto] bg-color-primary-100 rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,135,71,1)_0%,rgba(23,23,23,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-transform duration-300 group-hover:scale-110">
            <InputIcons
              className="!relative !left-[unset] !top-[unset] transition-transform duration-300 group-hover:rotate-12"
              property1="zap"
              propertyZapSize="https://c.animaapp.com/mjvgih5jVCDc2p/img/input-icons-8.svg"
              size="big"
            />
          </div>
        )}

        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="mt-[-1.00px] font-headline-h7 font-[number:var(--headline-h7-font-weight)] text-color-light-1000 text-[length:var(--headline-h7-font-size)] tracking-[var(--headline-h7-letter-spacing)] leading-[var(--headline-h7-line-height)] relative self-stretch [font-style:var(--headline-h7-font-style)]">
            {text}
          </div>

          <p className="font-body-SM font-[number:var(--body-SM-font-weight)] text-color-light-500 text-[length:var(--body-SM-font-size)] tracking-[var(--body-SM-letter-spacing)] leading-[var(--body-SM-line-height)] relative self-stretch [font-style:var(--body-SM-font-style)]">
            {text1}
          </p>
        </div>
      </div>

      <img
        className={`relative self-stretch w-full h-[272px] object-cover ${imagePlaceholderClassName}`}
        alt="Image placeholder"
        src={imagePlaceholder}
      />
    </div>
  );
};
