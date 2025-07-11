import InputFields from "@/common/components/input-fields";
import UseCreateUser from "./hook/use-create-user";

const Login = () => {
  const { errors, register, handleSubmit, onCreateUser } = UseCreateUser();
  return (
    <>
      <h1 data-testid="login-heading">Login Page</h1>
      <form data-testid="login-form" onSubmit={handleSubmit(onCreateUser)}>
        <InputFields
          name="name"
          placeholder="Enter name"
          type="text"
          error={errors.name}
          register={register}
          key={"create-name"}
          dataTestId="login-form-input-name"
        />
        <InputFields
          name="email"
          placeholder="Enter email"
          type="email"
          error={errors.email}
          register={register}
          key={"create-email"}
          dataTestId="login-form-input-email"
        />
        <InputFields
          name="password"
          placeholder="Enter password"
          type="password"
          error={errors.password}
          register={register}
          key={"create-password"}
          dataTestId="login-form-input-password"
        />
        <button type="submit" data-testid="login-form-input-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
