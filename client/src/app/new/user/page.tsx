import { FormPageTemplate } from "sw/app/new/form.page.template";
import { Metadata } from "next";
import { useMemo } from "react";
import { Input } from "sw/components/atoms/Input";
import { Form } from "sw/components/molecules/Form";

export const metadata: Metadata = {
  title: "Create New user",
};

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

export default function NewUserPage() {
  const submitForm = useMemo(() => {
    return (
      <Form
        fields={userFormFields}
        className="flex flex-col gap-4"
        submitProps={{
          className: "highlight capitalize w-full",
        }}
      />
      // <form className="flex flex-col gap-4">
      //   <div>
      //     <Input required type="email" label="email" />
      //   </div>
      //   <div>
      //     <Input required type="text" label="full name" />
      //   </div>
      //   <div>
      //     <Input required type="password" label="password" />
      //   </div>
      //   <div>
      //     <Input required type="password" label="confirm password" />
      //   </div>
      //   <div>
      //     <button className="highlight capitalize w-full">submit</button>
      //   </div>
      // </form>
    );
  }, []);

  return (
    <FormPageTemplate
      posterUrl="/assets/user.webp"
      title="create new user"
      form={submitForm}
      bgUrl="/assets/signin.webp"
    />
  );
}
