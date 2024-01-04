"use client";

import { useRouter } from "next/navigation";
import Input from "sw/components/atoms/Input";

export const CompanyForm = () => {
  const { push } = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    push("/confirm?source=company-form");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
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
};
