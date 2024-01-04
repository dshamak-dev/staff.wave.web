"use client";

import React, { useEffect, useState } from "react";
import { NoSSR } from "sw/components/atoms/NoSSR";

export const NoSSRScript: React.FC<{ src: string }> = ({ src }) => {
  const [el, setEl] = useState<any>(null);

  useEffect(() => {
    if (!el) {
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.info(src);
    };

    el.append(script);
  }, [el, src]);

  return (
    <NoSSR>
      <div ref={(el) => setEl(el)}></div>
    </NoSSR>
  );
};
