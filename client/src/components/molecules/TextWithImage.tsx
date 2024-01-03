import React from "react";

interface Props {
  title: string;
  text: string;
  imageProps: Record<string, string>;
}

export const TextWithImage: React.FC<Props> = ({ title, text, imageProps }) => {
  return (
    <div className="grid sm:grid-cols-[1fr_2fr] gap-8 text-center sm:text-left">
      <div className="flex items-center">
        <img {...imageProps} />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
