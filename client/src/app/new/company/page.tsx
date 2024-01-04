import { Metadata } from "next";
import { useMemo } from "react";
import { FormPageTemplate } from "sw/app/new/form.page.template";
import { Input } from "sw/components/atoms/Input";

export const metadata: Metadata = {
  title: "Create New Company",
};

export default function NewCompanyPage() {
  const submitForm = useMemo(() => {
    return (
      <form className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Input type="text" label="name" className="grow" />
          <Input type="file" label="logo" />
        </div>
        <div>
          <Input type="email" label="email" />
        </div>
        <div>
          <Input type="text" label="domain" />
        </div>
        <div>
          <Input type="textarea" label="description" rows="3" />
        </div>
        <div>
          <button className="highlight capitalize w-full">submit</button>
        </div>
      </form>
    );
  }, []);

  return (
    <FormPageTemplate
      posterUrl="/assets/company.webp"
      title="create new company"
      form={submitForm}
      bgUrl="/assets/signin.webp"
    />
  );
}
