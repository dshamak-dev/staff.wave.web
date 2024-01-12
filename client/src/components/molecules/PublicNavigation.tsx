import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { RouterLink } from "sw/components/atoms/RouterLink";

export const PublicNavigation = ({ className }: any) => {
  return (
    <nav className={classNames("fixed z-20 top-0 left-0 w-full", className)}>
      <div className="w-full flex justify-between py-4 px-4">
        <div>
          <RouterLink href="/" activeClassName="hidden">
            <img
              className="text-black w-8 h-8"
              alt="staff.wave"
              src="/logo-lg-blue.webp"
            />
          </RouterLink>
        </div>
        <RouterLink href="/login" activeClassName="hidden">Log In</RouterLink>
      </div>
    </nav>
  );
};
