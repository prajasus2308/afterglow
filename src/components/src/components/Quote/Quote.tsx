/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  text: string;
  text1: string;
  text2: string;
  text3: string;
}

export const Quote = ({
  className,
  text = "New @boltdotnew + @AnimaApp Figma to Code just got released. Spoiler: it’s the best tool by far right now.",
  text1 = "Miguel Fernandez",
  text2 = "Marketing Director",
  text3 = "@Flowkey",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[340px] items-start gap-4 p-6 relative bg-color-light-100 rounded-lg border border-solid border-color-light-250 transition-all duration-300 hover:border-color-primary-500 hover:bg-color-light-50 hover:-translate-y-2 hover:shadow-lg hover:shadow-color-primary-100 ${className}`}
    >
      <p className="relative self-stretch mt-[-1.00px] font-body-SM font-[number:var(--body-SM-font-weight)] text-color-light-1000 text-[length:var(--body-SM-font-size)] tracking-[var(--body-SM-letter-spacing)] leading-[var(--body-SM-line-height)] [font-style:var(--body-SM-font-style)]">
        {text}
      </p>

      <div className="gap-3 self-stretch w-full flex-[0_0_auto] flex items-start relative">
        <img
          className="relative w-12 h-12 object-cover"
          alt="Image"
          src="https://c.animaapp.com/mjvgih5jVCDc2p/img/image-8@2x.png"
        />

        <div className="flex-col gap-1 flex-1 grow flex items-start relative">
          <div className="flex h-6 items-center gap-1.5 relative self-stretch w-full">
            <div className="relative w-fit mt-[-1.00px] font-body-SM font-[number:var(--body-SM-font-weight)] text-color-light-1000 text-[length:var(--body-SM-font-size)] tracking-[var(--body-SM-letter-spacing)] leading-[var(--body-SM-line-height)] whitespace-nowrap [font-style:var(--body-SM-font-style)]">
              {text1}
            </div>
          </div>

          <div className="flex items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-XS font-[number:var(--body-XS-font-weight)] text-color-light-500 text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] whitespace-nowrap [font-style:var(--body-XS-font-style)]">
              {text2}
            </div>

            <div className="relative w-fit mt-[-1.00px] font-body-XS font-[number:var(--body-XS-font-weight)] text-[#1a75fe] text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] whitespace-nowrap [font-style:var(--body-XS-font-style)]">
              {text3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
