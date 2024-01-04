import React, { useMemo } from "react";
import { LinkButton } from "sw/components/atoms/LinkButton";

export default function ConfirmPage({ params, searchParams }: any) {
  const { source } = searchParams;
  const content = useMemo(() => {
    switch (source) {
      case "company-form": {
        return (
          <div className="grid sm:grid-cols-[auto_1fr] items-center">
            <div className="max-[640px]:row-start-2">
              <img className="sm:max-w-[40vw]" src="/assets/new-company.webp" />
            </div>
            <div className="flex flex-col gap-4 max-[640px]:items-center max-[640px]:text-center">
              <div className="flex flex-col gap-2">
                <h3 className="capitalize">
                  company was successfully created!
                </h3>
                <p className="text-sm">
                  We will send confirmation email shortly to finish process.
                </p>
              </div>
              <LinkButton href="/new/user" className="highlight capitalize">
                invite member
              </LinkButton>
            </div>
          </div>
        );
      }
      case "user-form": {
        return (
          <>
            <div className="grid sm:grid-cols-[auto_1fr] items-center">
              <div className="max-[640px]:row-start-2">
                <img
                  className="sm:max-w-[40vw]"
                  src="/assets/new-member.webp"
                />
              </div>
              <div className="flex flex-col gap-4 max-[640px]:items-center max-[640px]:text-center">
                <div className="flex flex-col gap-2">
                  <h3 className="capitalize">user was successfully created!</h3>
                  <p className="text-sm">
                    We will send confirmation email shortly to finish signup
                    process.
                  </p>
                </div>
                <LinkButton href="/login" className="capitalize">
                  log in
                </LinkButton>
              </div>
            </div>
          </>
        );
      }
      default: {
        return (
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center capitalize">
              thank you for using staff.wave!
            </h1>
            <LinkButton href="/" className="capitalize">
              Go Home
            </LinkButton>
          </div>
        );
      }
    }
  }, [source]);

  return (
    <main className="h-screen primary flex items-center justify-center p-8">
      <div>{content}</div>
    </main>
  );
}
