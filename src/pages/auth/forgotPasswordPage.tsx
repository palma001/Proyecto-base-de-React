import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "../../routes/routes";
import { forgotPasswordRule } from "../../rules/authRules";
import { ForgotPasswordInterface } from "../../interfaces/Auth";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const router = ROUTES;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordRule),
  });

  const forgotPassword = (data: ForgotPasswordInterface | any) => {
    console.log('data para enviar al back y logear');
    console.log(data)
  }

  return (
    <div className="grid gap-3">
      <div className="place-content-start w-full">
        <h3 className="text-xl font-bold">Olvidada tu contraseña? te enviaremos un correo</h3>
      </div>
      <form onSubmit={handleSubmit(forgotPassword)}>
        <div className="flex flex-col flex-wrap gap-5 relative">
          <Input
            radius="none"
            isClearable
            label="Correo electrónico"
            type="email"
            size="sm"
            {...register("email")}
            errorMessage={errors?.email?.message?.toString()}
            isInvalid={!!errors?.email}
          />
          <div className="flex justify-end items-center text-xs">
            <div>
              <NavLink to={`${router.AUTH}/${router.LOGIN}`} className="text-quanto" end>
                Iniciar sesión
              </NavLink>
            </div>
          </div>
          <div>
            <Button
              className="bg-quanto text-white"
              fullWidth
              size="sm"
              radius="none"
              isLoading={false}
              type="submit"
            >
              Recuperar contraseña
            </Button>
          </div>
        </div>
      </form>
      <span className="h-[0.2px] bg-quanto/50"></span>
      <div className="flex justify-center items-center text-xs">
        <div className="">
          <Link to="/authentication/register">
            No tienes una cuenta? <span className="text-quanto">Regístrate ahora</span>
          </Link>
        </div>
      </div>
    </div>
  )
}