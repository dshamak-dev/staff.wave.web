import Link from "next/link";
import React from "react";
import { Button, ButtonProps } from "sw/components/atoms/Button";

interface Props extends ButtonProps {
  href: string;
}

export const LinkButton: React.FC<Props> = ({ href, ...other }) => {
  return (
    <Link href={href}>
      <Button {...other} />
    </Link>
  );
};
