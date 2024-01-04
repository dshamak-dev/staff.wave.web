"use client";

import React, { useMemo } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { Button } from "sw/components/atoms/Button";
import { Input } from "sw/components/atoms/Input";

export type TField = {
  id: string;
  type: string;
  label?: string;
  defaultValue?: any;
  value?: any;
  disabled?: boolean;
  onChange?: (ev: Event) => void;
};

export interface FormProps<T> {
  data?: T;
  fields: TField[];
  submitProps?: Record<string, any>;
  className?: string;
  onSubmit?: (data: any) => void;
}

export function Form<T>(props: FormProps<T>) {
  const { fields = [], submitProps, className } = props;
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (props.onSubmit) {
      console.log(data);

      props.onSubmit(data);
    }
  };

  const canSubmit = useMemo(() => {
    return isDirty && isValid;
  }, [isDirty, isValid]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {fields.map((field, index) => {
        return (
          <Input
            key={index}
            {...field}
            error={errors[field.id]}
            {...register(field.id)}
          />
        );
      })}
      <Button type="submit" {...submitProps} disabled={!canSubmit}>
        {submitProps?.children || "submit"}
      </Button>
    </form>
  );
}
