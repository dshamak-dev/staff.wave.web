import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton } from "sw/components/atoms/LinkButton";

export default function HelloPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="relative z-10 -top-12 flex flex-col gap-4 items-center">
        <h1 className="drop-shadow capitalize">page not found</h1>
        <LinkButton
          href="/"
          className="grid gap-2 grid-cols-[1fr_1rem] items-center primary shadow"
        >
          <span className="whitespace-nowrap">Back to home</span>{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </LinkButton>
      </div>
      <div className="fixed w-full left-0 top-0 z-0 h-full flex items-center justify-center">
        <img src="/assets/404.webp" className="opacity-20" />
      </div>
    </main>
  );
}
