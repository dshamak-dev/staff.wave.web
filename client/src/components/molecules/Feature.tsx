import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import React, { HTMLAttributes, ReactElement } from "react";

export interface FeatureProps extends HTMLAttributes<unknown> {
  icon?: IconProp;
  title: string;
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({
  className,
  icon,
  title,
  text,
  ...props
}) => {
  return (
    <div className={classNames(className, "flex flex-col gap-2 items-center text-center")}>
      {icon != null ? <FontAwesomeIcon icon={icon} className="h-12 text-highlight" /> : null}
      <h3>{title}</h3>
      <p className="text-xs">{text}</p>
    </div>
  );
};
