/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordRule } from "../../rules/authRules";
import { ResetPasswordInterface } from "../../interfaces/Auth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { api } from "../../libs/axios";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { ROUTES } from "../../routes/routes";

export default function ResetPasswordPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordRule),
  });

  const forgotPassword = async (data: ResetPasswordInterface | any) => {
    const res = await api.post("/authentication/password/reset", {
        ...data,
        token,
        email,
    });
    
    if (res.status === 200) {
      toast.success("Contraseña actualizada");
      navigate(`${ROUTES.LOGIN}`);
    }
  };

  console.log(errors);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="place-content-start w-full max-w-sm flex flex-col gap-1">
        <h3 className="text-xl text-left font-semibold">
          Ingresa tu nueva contraseña
        </h3>
        <p className="text-small text-default-500 text-left w-full">Bienvenido de nuevo a Subscription</p>
      </div>
      <form onSubmit={handleSubmit(forgotPassword)} className="flex flex-col gap-3 w-full max-w-sm">
        <div className="flex flex-col flex-wrap gap-3 relative">
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
            {...register("password_confirmation")}
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
 
    </div>
  );
}
