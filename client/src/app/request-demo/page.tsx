import { Metadata } from "next";
import { FormPageTemplate } from "sw/app/new/form.page.template";
import { RequestDemoForm } from "sw/app/request-demo/RequestDemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
};

export default function RequestDemoPage() {
  return (
    <FormPageTemplate
      posterUrl="/assets/company.webp"
      title="request a demo"
      form={<RequestDemoForm />}
      bgUrl="/assets/signin.webp"
    />
  );
}
