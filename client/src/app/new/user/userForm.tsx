"use client";

import { useRouter } from "next/navigation";
import { Form } from "sw/components/molecules/Form";

const userFormFields = [
  {
    type: "email",
    label: "email",
    id: "email",
    required: true,
  },
  {
    type: "text",
    label: "full name",
    id: "fullName",
    required: true,
  },
  {
    type: "password",
    label: "password",
    id: "password",
    required: true,
  },
  {
    type: "password",
    label: "confirm password",
    id: "confirmPassword",
    required: true,
  },
];

export const UserForm = () => {
  const { replace } = useRouter();

  const handleSubmit = (data: any) => {
    replace("/confirm?source=user-form");
  };

  return (
    <Form
      fields={userFormFields}
      className="flex flex-col gap-4"
      submitProps={{
        className: "highlight capitalize w-full",
      }}
      onSubmit={(data) => handleSubmit(data)}
    />
  );
};
