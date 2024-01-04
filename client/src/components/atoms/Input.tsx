import classNames from "classnames";
import React, { PropsWithChildren, useCallback, useMemo } from "react";
import "sw/styles/input.style.css";

export interface InputProps extends PropsWithChildren<any> {
  label?: string;
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ className, label, error, ...other }, ref) => {
    const { required, type } = other;

    const labelEl = useMemo(() => {
      if (!required && !label) {
        return null;
      }

      const text = label || null;

      return <label>{text}</label>;
    }, [required, label]);

    const render = useCallback(
      (props: any) => {
        switch (type) {
          case "textarea": {
            return <textarea ref={ref} {...props} />;
          }
          default: {
            return <input ref={ref} {...props} />;
          }
        }
      },
      [type, ref]
    );

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

Input.displayName = "Input";

export default Input;
