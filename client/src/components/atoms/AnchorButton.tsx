"use client";

import React from "react";
import { Button, ButtonProps } from "sw/components/atoms/Button";

interface Props extends ButtonProps {
  targetId: string;
}

export const AnchorButton: React.FC<Props> = ({ targetId, ...other }) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);

    if (el != null) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <Button {...other} onClick={handleClick} />;
};
