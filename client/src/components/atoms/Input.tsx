import classNames from "classnames";
import React, { PropsWithChildren, useMemo } from "react";
import "sw/styles/input.style.css";

export interface InputProps extends PropsWithChildren<any> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  type,
  required,
  ...other
}) => {
  const labelEl = useMemo(() => {
    if (!required && !label) {
      return null;
    }

    const text = label || null;

    return <label>{text}</label>;
  }, [required, label]);

  const El = useMemo(() => {
    switch (type) {
      case "textarea": {
        return (props: any) => <textarea required={required} {...props} />;
      }
      default: {
        return (props: any) => (
          <input required={required} type={type} {...props} />
        );
      }
    }
  }, [type]);

  return (
    <div
      className={classNames("input-wrap text-xs", { required }, className)}
      data-label={label}
      data-type={type}
    >
      {labelEl}
      <El {...other} />
    </div>
  );
};
