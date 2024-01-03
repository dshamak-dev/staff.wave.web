import classNames from "classnames";
import React, { PropsWithChildren, ReactElement } from "react";

export interface ButtonProps extends PropsWithChildren<any> {}

export const Button: React.FC<ButtonProps> = ({ className, children, ...other }) => {
  return (
    <button {...other} className={classNames("button capitalize", className)}>
      {children}
    </button>
  );
};
