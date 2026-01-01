/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Check } from "../Check";

interface Props {
  showBadge: boolean;
  type: "highlighted" | "default";
  className: any;
  checkCheck: string;
  text: string;
  checkImg: string;
  text1: string;
  checkCheck1: string;
  text2: string;
  checkCheck2: string;
  text3: string;
  checkCheck3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  featuresDescriptionClassName: any;
  featuresDescriptionClassNameOverride: any;
}

export const PricingCard = ({
  showBadge = true,
  type,
  className,
  checkCheck = "https://c.animaapp.com/mjvgih5jVCDc2p/img/checkmark-9.svg",
  text = "Up to 5 project members",
  checkImg = "https://c.animaapp.com/mjvgih5jVCDc2p/img/checkmark-9.svg",
  text1 = "Unlimited tasks and projects",
  checkCheck1 = "https://c.animaapp.com/mjvgih5jVCDc2p/img/checkmark-9.svg",
  text2 = "2GB storage",
  checkCheck2 = "https://c.animaapp.com/mjvgih5jVCDc2p/img/checkmark-9.svg",
  text3 = "Integrations",
  checkCheck3 = "https://c.animaapp.com/mjvgih5jVCDc2p/img/checkmark-9.svg",
  text4 = "Basic support",
  text5 = "Perfect for individuals and small projects",
  text6 = "Basic",
  text7 = "$19",
  featuresDescriptionClassName,
  featuresDescriptionClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div
      className={`flex items-start pt-[var(--spacing-spacing-xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] relative w-[354px] flex-col rounded-[var(--spacing-corner-radius-sm)] gap-[var(--spacing-spacing-xl)] ${type === "default" ? "border-color-light-250" : ""} ${type === "highlighted" ? "bg-color-primary-100" : "bg-color-light-50"} ${type === "highlighted" ? "border-[none]" : "border border-solid"} ${type === "highlighted" ? "before:content-['']" : ""} ${type === "highlighted" ? "before:[mask-composite:exclude]" : ""} ${type === "highlighted" ? "before:pointer-events-none" : ""} ${type === "highlighted" ? "before:inset-0" : ""} ${type === "highlighted" ? "before:[background:linear-gradient(180deg,rgba(255,135,71,1)_0%,rgba(23,23,23,0.1)_100%)]" : ""} ${type === "highlighted" ? "before:absolute" : ""} ${type === "highlighted" ? "before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" : ""} ${type === "highlighted" ? "before:rounded-lg" : ""} ${type === "highlighted" ? "before:p-px" : ""} ${type === "highlighted" ? "before:z-[1]" : ""} ${type === "highlighted" ? "before:[-webkit-mask-composite:xor]" : ""} ${className}`}
    >
      <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
        <div
          className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${type === "default" ? "gap-6" : ""} ${type === "highlighted" ? "justify-between" : ""}`}
        >
          <div
            className={`font-body-MD w-fit mt-[-1.00px] tracking-[var(--body-MD-letter-spacing)] text-[length:var(--body-MD-font-size)] [font-style:var(--body-MD-font-style)] relative font-[number:var(--body-MD-font-weight)] text-center whitespace-nowrap leading-[var(--body-MD-line-height)] ${type === "default" ? "text-color-light-750" : "text-color-light-1000"}`}
          >
            {type === "highlighted" && <>Pro</>}

            {type === "default" && <>{text6}</>}
          </div>

          {type === "highlighted" && (
            <>
              <>
                {showBadge && (
                  <Badge
                    className="!flex-[0_0_auto]"
                    inputIconsProperty1="zap"
                    inputIconsPropertyZapSize="https://c.animaapp.com/mjvgih5jVCDc2p/img/input-icons-7.svg"
                    label="Most Popular"
                    state="default"
                  />
                )}
              </>
            </>
          )}
        </div>

        <div className="w-full flex self-stretch items-center gap-3 flex-[0_0_auto] relative">
          <div className="font-headline-h5 w-fit mt-[-1.00px] tracking-[var(--headline-h5-letter-spacing)] text-[length:var(--headline-h5-font-size)] [font-style:var(--headline-h5-font-style)] text-color-light-1000 font-[number:var(--headline-h5-font-weight)] text-center whitespace-nowrap leading-[var(--headline-h5-line-height)] relative">
            {type === "default" && <>{text7}</>}

            {type === "highlighted" && <>$49</>}
          </div>

          <div
            className={`font-body-MD w-fit tracking-[var(--body-MD-letter-spacing)] [font-style:var(--body-MD-font-style)] text-[length:var(--body-MD-font-size)] relative font-[number:var(--body-MD-font-weight)] text-center whitespace-nowrap leading-[var(--body-MD-line-height)] ${type === "highlighted" ? "text-color-light-1000" : "text-color-light-750"}`}
          >
            /month
          </div>
        </div>

        <Button
          className="!self-stretch !flex !w-full"
          label="Subscribe"
          showIcon={false}
          size="big"
          stateProp="default"
          type={type === "highlighted" ? "primary" : "secondary"}
        />
      </div>

      <div className="w-full flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] relative">
        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck}
            className="!relative !left-[unset] !top-[unset]"
          />
          <p className="font-body-SM w-fit mt-[-1.00px] tracking-[var(--body-SM-letter-spacing)] text-[length:var(--body-SM-font-size)] [font-style:var(--body-SM-font-style)] text-color-light-1000 relative font-[number:var(--body-SM-font-weight)] whitespace-nowrap leading-[var(--body-SM-line-height)]">
            {text}
          </p>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkImg}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div
            className={`font-body-SM w-fit mt-[-1.00px] tracking-[var(--body-SM-letter-spacing)] text-[length:var(--body-SM-font-size)] [font-style:var(--body-SM-font-style)] text-color-light-1000 relative font-[number:var(--body-SM-font-weight)] whitespace-nowrap leading-[var(--body-SM-line-height)] ${featuresDescriptionClassNameOverride}`}
          >
            {text1}
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck1}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div className="font-body-SM w-fit mt-[-1.00px] tracking-[var(--body-SM-letter-spacing)] text-[length:var(--body-SM-font-size)] [font-style:var(--body-SM-font-style)] text-color-light-1000 relative font-[number:var(--body-SM-font-weight)] whitespace-nowrap leading-[var(--body-SM-line-height)]">
            {text2}
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck2}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div className="font-body-SM w-fit mt-[-1.00px] tracking-[var(--body-SM-letter-spacing)] text-[length:var(--body-SM-font-size)] [font-style:var(--body-SM-font-style)] text-color-light-1000 relative font-[number:var(--body-SM-font-weight)] whitespace-nowrap leading-[var(--body-SM-line-height)]">
            {text3}
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck3}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div
            className={`font-body-SM w-fit mt-[-1.00px] tracking-[var(--body-SM-letter-spacing)] text-[length:var(--body-SM-font-size)] [font-style:var(--body-SM-font-style)] text-color-light-1000 relative font-[number:var(--body-SM-font-weight)] whitespace-nowrap leading-[var(--body-SM-line-height)] ${featuresDescriptionClassName}`}
          >
            {text4}
          </div>
        </div>
      </div>

      <div
        className={`font-body-XS self-stretch tracking-[var(--body-XS-letter-spacing)] [font-style:var(--body-XS-font-style)] text-[length:var(--body-XS-font-size)] relative font-[number:var(--body-XS-font-weight)] text-center leading-[var(--body-XS-line-height)] ${type === "highlighted" ? "text-color-light-500" : "text-color-light-750"}`}
      >
        {type === "default" && <p>{text5}</p>}

        {type === "highlighted" && (
          <p>Ideal for growing businesses and teams</p>
        )}
      </div>
    </div>
  );
};
