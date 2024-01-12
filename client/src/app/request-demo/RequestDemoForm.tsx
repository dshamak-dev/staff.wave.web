"use client";

import { useRouter } from "next/navigation";
import {
  RequestDemoDTO,
  postRequestDemo,
} from "sw/app/request-demo/request-demo.api";
import Input from "sw/components/atoms/Input";
import { showToaster } from "sw/components/molecules/Toaster";
import { parseFormFields } from "sw/support/form.utils";

export const RequestDemoForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data: RequestDemoDTO = parseFormFields(e.target);

    try {
      const response = await postRequestDemo(data)
        .then((res) => {
          return { ok: true };
        })
        .catch((error) => {
          showToaster('error', error.message);

          return { ok: false };
        });

      if (response.ok) {
        push("/confirm?source=request-demo");
      }
    } catch (error: any) {
      showToaster('error', error.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex gap-2">
        <Input
          type="text"
          label="company name"
          id="name"
          required
          className="grow"
        />
      </div>
      <div>
        <Input type="email" label="corporate email" id="email" required />
      </div>
      <div>
        <Input type="text" label="area" id="area" required />
      </div>
      <div>
        <Input
          type="number"
          label="employeeNumber"
          min="1"
          id="employeeNumber"
          required
        />
      </div>
      <div>
        <button className="highlight capitalize w-full">request a demo</button>
      </div>
    </form>
  );
};
