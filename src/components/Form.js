import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Your name is required!"),
    email: yup.string().email("Enter Valid Email ").required(""),
    age: yup
      .number("Age should be more than 18")
      .positive("Enter A Valid Number")
      .integer("Enter A Valid Number")
      .min(18, "Age should be more than 18")
      .required("Age field is required"),
    password: yup.string().min(4).max(20).required(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("hello bich");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      <p>{errors.name?.message}</p>
      <input type="email" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmpassword")}
      />
      <p>{errors.confirmpassword?.message}</p>

      <input type="submit" value="Submit" />
    </form>
  );
};
