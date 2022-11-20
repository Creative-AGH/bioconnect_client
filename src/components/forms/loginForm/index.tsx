import { useForm, SubmitHandler } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useGetUserMutation } from "../../../features/api/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [loginUser, { isLoading }] = useGetUserMutation();

  const schema = yup
    .object({
      email: yup.string().required(),
      name: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email: username, ...res } = data;
    console.log(data);
    loginUser({ username, ...res });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1} direction="column">
        <label>Email</label>
        <OutlinedInput
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}

        <label>Password</label>
        <OutlinedInput
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Password is required</span>}

        <Button variant="contained" type="submit">
          Wyślij
        </Button>
      </Stack>
    </form>
  );
}
