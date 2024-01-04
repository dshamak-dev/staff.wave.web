import classNames from "classnames";
import React, { PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren<any> {}

export const Footer: React.FC<Props> = ({ className }) => {
  return <footer className={classNames(className)}>
    <div
      className={classNames("flex justify-center items-center gap-1 text-xs")}
    >
      <p className="py-6">staff.wave</p>
      <img className="w-4 h-4" alt="staff.wave" src="/logo.webp" />
    </div>
  </footer>;
};
