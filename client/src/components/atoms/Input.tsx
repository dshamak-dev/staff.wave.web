import classNames from "classnames";
import React, { PropsWithChildren, useMemo } from "react";
import "sw/styles/input.style.css";

export interface InputProps extends PropsWithChildren<any> {
  label?: string;
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ className, label, type, required, error, ...other }, ref) => {
    const labelEl = useMemo(() => {
      if (!required && !label) {
        return null;
      }

      const text = label || null;

      return <label>{text}</label>;
    }, [required, label]);

    const render = useMemo(() => {
      switch (type) {
        case "textarea": {
          return function TextArea(props: any) {
            return <textarea ref={ref} required={required} {...props} />;
          };
        }
        default: {
          return function RawInput(props: any) {
            return (
              <input ref={ref} required={required} type={type} {...props} />
            );
          };
        }
      }
    }, [type, required, ref]);

    const inputError = useMemo(() => {
      if (!error) {
        return null;
      }

      return <p className="text-xs text-red-500">{error}</p>;
    }, [error]);

    return (
      <div
        className={classNames("input-wrap text-xs", { required }, className)}
        data-label={label}
        data-type={type}
      >
        {labelEl}
        {render(other)}
        {inputError}
      </div>
    );
  }
);
