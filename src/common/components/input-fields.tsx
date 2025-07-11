import type { InputFiledsProps } from "@/features/type";
import type React from "react";

const InputFields: React.FC<InputFiledsProps> = ({
  name,
  placeholder,
  type,
  error,
  register,
  dataTestId = "",
}) => {
  return (
    <div>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        style={{ borderColor: error ? "red" : "black" }}
        data-testid={dataTestId}
      />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default InputFields;
