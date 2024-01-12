import { FormPageTemplate } from "sw/app/new/form.page.template";
import { Metadata } from "next";
import { UserForm } from "sw/app/new/user/userForm";

export const metadata: Metadata = {
  title: "Create New user",
};

export default function NewUserPage() {
  return (
    <FormPageTemplate
      posterUrl="/assets/user.webp"
      title="create new user"
      form={<UserForm />}
      bgUrl="/assets/signin.webp"
    />
  );
}
