import React, { useMemo } from "react";
import { LinkButton } from "sw/components/atoms/LinkButton";
import { PublicNavigation } from "sw/components/molecules/PublicNavigation";

export default function LoginPage({ params, searchParams }: any) {
  return (
    <main className="h-screen primary flex items-center justify-center p-8">
      <PublicNavigation />
      <div className="grid sm:grid-cols-[auto_1fr] items-center">
        <div className="max-[640px]:row-start-2">
          <img className="sm:max-w-[40vw]" src="/assets/success.png" />
        </div>
        <div className="flex flex-col gap-4 max-[640px]:items-center max-[640px]:text-center">
          <div className="flex flex-col gap-2">
            <h3 className="capitalize">don't have registered company?</h3>
            <p className="text-sm uppercase">
              Request Demo to get access
            </p>
          </div>
          <LinkButton href="/request-demo" className="capitalize highlight">
            request demo
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
