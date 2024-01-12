import classNames from "classnames";
import React, { PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren<any> {}

export const Footer: React.FC<Props> = ({ className }) => {
  return <footer className={classNames(className)}>
    <div
      className={classNames("flex flex-col justify-center items-center gap-0 py-4 text-xs")}
    >
      <img className="w-10 h-10" alt="staff.wave" src="/logo.webp" />
      <p>staff.wave</p>
    </div>
  </footer>;
};
