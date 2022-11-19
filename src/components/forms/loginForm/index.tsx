import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  mail: string;
  password: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <input {...register("password", { required: true })} />
      {errors.password && <span>Password is required</span>}

      <input type="submit" />
    </form>
  );
}
