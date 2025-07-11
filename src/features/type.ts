import type { FieldError, UseFormRegister } from "react-hook-form";

export type CreateUserFormData = {
  name: string;
  password: string;
  email: string;
};

export interface InputFiledsProps {
  placeholder: string;
  type: "text" | "password" | "email";
  register: UseFormRegister<CreateUserFormData>;
  error: FieldError | undefined;
  name: ValidFieldNames;
  valueAsNumber?: boolean;
    dataTestId?:string
}

export type ValidFieldNames = "name" | "password" | "email";
