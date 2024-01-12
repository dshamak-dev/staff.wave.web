"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  RequestDemoDTO,
  postRequestDemo,
} from "sw/app/request-demo/request-demo.api";
import Input from "sw/components/atoms/Input";
import { showToaster } from "sw/components/molecules/Toaster";
import { parseFormFields } from "sw/support/form.utils";

const errorMessage = `Oops, something went wrong! Please, try again later.`;

export const RequestDemoForm = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data: RequestDemoDTO = parseFormFields(e.target);

    setLoading(true);

    try {
      const response = await postRequestDemo(data)
        .then((res) => {
          return { ok: true };
        })
        .catch((error) => {
          let message = error.message || errorMessage;

          if (message.toLowerCase() === "failed to fetch") {
            message = errorMessage;
          }

          showToaster("error", message);

          return { ok: false };
        });

      if (response.ok) {
        push("/confirm?source=request-demo");
      }
    } catch (error: any) {
      showToaster("error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="relative flex flex-col gap-4"
      aria-disabled={loading}
      onSubmit={(e) => handleSubmit(e)}
    >
      {loading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-white/60 flex items-center justify-center">
          <FontAwesomeIcon className="text-2xl loading" icon={faSpinner} />
        </div>
      ) : null}
      <div className="flex gap-2">
        <Input
          type="text"
          label="company name"
          id="name"
          required
          className="grow"
          disabled={loading}
        />
      </div>
      <div>
        <Input
          type="email"
          label="corporate email"
          id="email"
          required
          disabled={loading}
        />
      </div>
      <div>
        <Input type="text" label="area" id="area" required disabled={loading} />
      </div>
      <div>
        <Input
          type="number"
          label="employeeNumber"
          min="1"
          id="employeeNumber"
          required
          disabled={loading}
        />
      </div>
      <div>
        <button disabled={loading} className="highlight capitalize w-full">
          request a demo
        </button>
      </div>
    </form>
  );
};
