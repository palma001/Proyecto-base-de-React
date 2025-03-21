import { Button, Divider, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "../../routes/routes";
import { forgotPasswordRule } from "../../rules/authRules";
import { ForgotPasswordInterface } from "../../interfaces/Auth";
import { api } from "../../libs/axios";
import { Link } from "react-router";


export default function ForgotPasswordPage() {
  const router = ROUTES;

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ForgotPasswordInterface>({
    resolver: zodResolver(forgotPasswordRule),
  });

  const forgotPassword = async (data: ForgotPasswordInterface) => {
    const res = await api.post("/auth/password/reset-request", data);
    console.log(res);
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
            Recordaste la contraseña?{" "}
            <span className="text-primary">Ingresa aquí</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
