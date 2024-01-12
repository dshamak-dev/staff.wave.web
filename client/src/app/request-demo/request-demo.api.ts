import { POST_JSON } from "sw/support/api.utils";

export interface RequestDemoDTO {
  name: string;
  area: string;
  employeeNumber: number;
  corporateEmail: string;
}

export const postRequestDemo = (data: RequestDemoDTO): Promise<any> => {
  return POST_JSON('/requestdemo', data);
};
