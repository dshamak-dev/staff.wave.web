"use client";

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

export const RouterLink = ({
  href,
  activeClassName,
  className,
  ...other
}: any) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const pathname = location.pathname;

    setIsActive(pathname === href);
  }, []);

  return (
    <Link
      {...other}
      href={href}
      className={classNames(className, { [activeClassName]: isActive })}
    />
  );
};
