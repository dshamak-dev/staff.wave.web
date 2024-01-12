"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

export const Page = ({ children }: { children: (props: any) => any }) => {
  const [os, setOs] = useState<string>("unknown");

  useEffect(() => {
    try {
      const userAgent = window.navigator.userAgent;
      let os = "unknown";

      console.log(userAgent);

      if (userAgent.indexOf("Win") != -1) os = "windows";
      if (userAgent.indexOf("Mac") != -1) os = "mac";
      if (userAgent.indexOf("X11") != -1) os = "unix";
      if (userAgent.indexOf("Linux") != -1) os = "linux";

      setOs(os);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return children({ className: classNames(os) });
};
