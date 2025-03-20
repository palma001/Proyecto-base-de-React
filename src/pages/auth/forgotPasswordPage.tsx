/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "../../routes/routes";
import { forgotPasswordRule } from "../../rules/authRules";
import { ForgotPasswordInterface } from "../../interfaces/Auth";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = ROUTES;

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordRule),
  });

  const forgotPassword = (data: ForgotPasswordInterface | any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="place-content-start w-full max-w-sm flex flex-col gap-1">
        <h3 className="text-xl text-left font-semibold">
          ¿Olvidaste tu contraseña?
        </h3>
        <p className="text-small text-default-500 text-left w-full">No te preocupes, te enviaremos un correo</p>
      </div>
      <form onSubmit={handleSubmit(forgotPassword)} className="flex flex-col gap-3 w-full max-w-sm">
        <div className="flex flex-col flex-wrap gap-3 relative">
          <Input
            isRequired
            label="Correo"
            {...register("email")}
            variant="bordered"
          />
          <Input
            isRequired
            {...register("password")}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <FaEyeSlash className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <FaEye className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            label="Contraseña"
            {...register("confirm_password")}
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <FaEyeSlash className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <FaEye className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            label="Confirmar contraseña"
            name="password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="mt-3">
            <Button className="w-full" color="primary" type="submit">
              Recuperar contraseña
            </Button>
          </div>
        </div>
      </form>
      <Divider/>
      <div className="flex justify-center items-center text-xs">
        <div className="">
          <Link to={`${router.LOGIN}`} className="text-sm">
            No tienes una cuenta?{" "}
            <span className="text-primary">Regístrate ahora</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
