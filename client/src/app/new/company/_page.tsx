import { Metadata } from "next";
import { CompanyForm } from "sw/app/new/company/CompanyForm";
import { FormPageTemplate } from "sw/app/new/form.page.template";

export const metadata: Metadata = {
  title: "Create New Company",
};

export default function NewCompanyPage() {
  return (
    <FormPageTemplate
      posterUrl="/assets/company.webp"
      title="create new company"
      form={<CompanyForm />}
      bgUrl="/assets/signin.webp"
    />
  );
}
