import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
} from "react";

import { classnames } from "tailwindcss-classnames";

import style from "./index.module.css";

export type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"div">, "className">>
>;

export const ConicBalloon = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      className={`
        ${classnames(
          "relative",
          "w-min",
          "bg-blue-200",
          "border",
          "border-blue-500",
          "p-4",
          "rounded-xl"
        )}
        ${style.balloon}
      `}
      {...props}
    />
  );
});
ConicBalloon.displayName = "ConicBalloon";
