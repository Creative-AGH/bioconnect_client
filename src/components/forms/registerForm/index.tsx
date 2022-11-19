import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
  mail: string;
  password: string;
  repeatPassword: string;
};

export default function RegisterForm() {
    const schema = yup.object({
        mail: yup.string().required(),
        password: yup.string().required(),
        repeatPassword: yup.string().required(),
      }).required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors?.mail && <p>{errors.mail.message}</p>}

      <label>Password</label>
      <input {...register("password", { required: true })} />
      {errors.password && <span>Password is required</span>}

      <label>Repeat password</label>
      <input {...register("repeatPassword", { required: true })} />
      {errors.repeatPassword && <span>Repear password is required</span>}

      <input type="submit" />
    </form>
  );
}
