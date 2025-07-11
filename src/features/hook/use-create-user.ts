import { useForm } from "react-hook-form";
import type { CreateUserFormData } from "../type";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormSchema } from "./schema";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/auth-slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routers/route";

const UseCreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onCreateUser = (data: CreateUserFormData) => {
    dispatch(login({ ...data }));

    navigate(ROUTES.Home);
  };
  return {
    register,
    handleSubmit,
    errors,
    setError,
    onCreateUser,
  };
};

export default UseCreateUser;
