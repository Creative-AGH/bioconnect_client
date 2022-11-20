import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useCreateUserMutation } from "../../../features/api/userSlice";
import styles from "./index.module.scss";

type Inputs = {
  email: string;
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
};

export default function RegisterForm() {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const schema = yup
    .object({
      email: yup.string().required(),
      name: yup.string().required(),
      surname: yup.string().required(),
      password: yup.string().required(),
      repeatPassword: yup.string().required(),
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
    const { repeatPassword, ...dataToSend } = data;
    console.log(dataToSend);
    createUser(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Stack spacing={1} direction="column">
        <label>Email</label>
        <OutlinedInput
          color="primary"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors?.email && <p>{errors.email.message}</p>}

        <label>Name</label>
        <OutlinedInput {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}

        <label>Surname</label>
        <OutlinedInput {...register("surname", { required: true })} />
        {errors.surname && <span>Surname is required</span>}

        <label>Password</label>
        <OutlinedInput {...register("password", { required: true })} />
        {errors.password && <span>Password is required</span>}

        <label>Repeat password</label>
        <OutlinedInput {...register("repeatPassword", { required: true })} />
        {errors.repeatPassword && <span>Repear password is required</span>}

        <Button variant="contained" type="submit">
          Wyślij
        </Button>
      </Stack>
    </form>
  );
}
