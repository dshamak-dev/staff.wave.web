import { PropsWithoutRef, ReactElement } from "react";
import "./form.page.style.css";
import Link from "next/link";
import classNames from "classnames";

interface Props extends PropsWithoutRef<any> {
  posterUrl?: string;
  bgUrl?: string;
  title: ReactElement | string;
  form: ReactElement;
}

export const FormPageTemplate = ({
  className,
  posterUrl,
  bgUrl,
  title,
  form,
}: Props) => {
  return (
    <main className={classNames(className)}>
      {/* <nav>links</nav> */}
      <div
        className="aside-content"
        style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : "" }}
      >
        <Link href="/" className="home-link flex flex-col gap-2 text-center">
          <img width="64" height="64" src="/logo-lg.webp" />
          <h4 className="text-xs">staff.wave</h4>
        </Link>
      </div>
      <div
        className={classNames("content-wrap")}
        style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : "" }}
      >
        <div className="content">
          <h1 className="title">{title}</h1>
          <div className="form-wrap">{form}</div>
        </div>
      </div>
    </main>
  );
};
