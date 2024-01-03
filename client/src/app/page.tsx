import classNames from "classnames";
import "./page.style.css";

import { Feature } from "sw/components/molecules/Feature";
import { introGallery, introlFeatures, prosList } from "sw/app/page.model";
import { useCallback, useMemo } from "react";
import { LinkButton } from "sw/components/atoms/LinkButton";
import { AnchorButton } from "sw/components/atoms/AnchorButton";

export default function LandingPage() {
  const signupButton = useMemo(() => {
    return (
      <LinkButton href="/create/company" className="highlight">
        start now
      </LinkButton>
    );
  }, []);
  const renderLearnMoreButton = useCallback((targetId: string) => {
    return <AnchorButton targetId={targetId}>learn more</AnchorButton>;
  }, []);

  return (
    <main
      id="landing-page"
      className={classNames(
        "flex min-h-screen flex-col items-center justify-between",
        "primary"
      )}
    >
      <article>
        <section className={classNames("intro", "flex flex-col gap-8")}>
          <div
            className={classNames(
              "relative z-10 mt-24 flex flex-col gap-4 items-center"
            )}
          >
            <h1 className="max-w-[70vw]">
              STAFF.WAVE Your Complete HR and Team Management Solution
            </h1>
            <p>{`Unlock the full potential of your workforce with our ultimate
              Human Resources platform designed to streamline your team
              management processes. Whether you're a small startup or a growing
              enterprise, Staff.Wave empowers you to build a thriving workplace
              environment where your team can flourish.`}</p>
          </div>
          <div className="flex gap-8 justify-center">
            {signupButton}
            {renderLearnMoreButton("features")}
          </div>
        </section>
        <section id="features" className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2>Effortless Employee Onboarding</h2>
            <p>{`Simplify onboarding with Saff.Wave's user-friendly tools. From
              electronic document signing to personalized welcome workflows,
              ensure your new team members feel at home from the very start.`}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-12">
            {introlFeatures.map(({ icon, title, text }, index) => (
              <Feature key={index} icon={icon} title={title} text={text} />
            ))}
          </div>
        </section>
        <section className="gallery-section">
          <div className="gallery-wrap">
            <div className={classNames("gallery")}>
              {introGallery.map(({ url, text }, index) => (
                <div key={index} className="h-[35vw]">
                  <img
                    loading="lazy"
                    src={url}
                    alt={text}
                    className="max-h-full max-w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-rows-[2fr_3fr] sm:grid-rows-[1fr] sm:grid-cols-[2fr_3fr] gap-8 text-center sm:text-left">
            <div className="flex items-center bg-no-repeat bg-cover bg-[url('/assets/intro/elevate.webp')]"></div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3>Elevate with Saff.Wave</h3>
                <p>{`Transform the way you work, cultivate a positive company
                  culture, and propel your business forward. Try Saff.Wave today
                  and witness the difference in efficiency, collaboration, and
                  employee satisfaction.`}</p>
              </div>
              <div>{renderLearnMoreButton("pros")}</div>
            </div>
          </div>
        </section>
        <section id="pros">
          <div className="sm:grid sm:grid-cols-[2fr_2fr] gap-8 text-center sm:text-left">
            <div className="flex flex-col gap-8">
              {prosList.map(({ title, text }, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="text-sm">{title}</h4>
                  <p className="text-sm text-gray-500">{text}</p>
                </div>
              ))}
            </div>
            <div className="max-[640px]:hidden flex items-center bg-no-repeat bg-contain bg-center bg-[url('/assets/intro/team.webp')]"></div>
          </div>
        </section>
        <section>
          <div className="grid sm:grid-rows-[1fr] sm:grid-cols-[3fr_2fr] gap-8 text-center sm:text-left">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2>Effortless Employee Onboarding</h2>
                <p>{`Simplify onboarding with Saff.Wave's user-friendly tools.
                  Transform the way you work, cultivate a positive company
                  culture, and propel your business forward. Try Saff.Wave today
                  and witness the difference in efficiency, collaboration, and
                  employee satisfaction.`}</p>
              </div>
              <div>{signupButton}</div>
            </div>
            <div className="max-[640px]:hidden sm:min-h-[30vh] flex items-center bg-no-repeat bg-contain bg-center bg-[url('/assets/intro/onboarding.webp')]"></div>
          </div>
        </section>
      </article>
      <footer>
        <div
          className={classNames(
            "flex justify-center items-center gap-1 text-xs"
          )}
        >
          <p className="py-6">staff.wave</p>
          <img className="w-4 h-4" alt="staff.wave" src="/logo.webp" />
        </div>
      </footer>
    </main>
  );
}
