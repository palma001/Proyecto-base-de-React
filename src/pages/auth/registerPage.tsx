import { Button, Divider, Form, Input } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerRule } from "../../rules/authRules";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginPage() {
  const {
    // register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerRule),
  });

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  console.log(errors);
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
          <div className="flex flex-col items-center pb-2">
            <p className="text-xl font-medium w-full text-left">Bienvenido</p>
            <p className="text-small text-default-500 w-full text-left">
              Regístrate para continuar
            </p>
          </div>
          <Form
            onSubmit={handleRegister}
            className="flex flex-col gap-3"
            validationBehavior="native"
          >
            <Input
              isRequired
              label="Nombre"
              placeholder="Ingresa su nombre"
              variant="bordered"
            />
            <Input
              isRequired
              label="Teléfono"
              placeholder="Ingresa su nombre"
              variant="bordered"
            />
            <Input
              isRequired
              label="Correo electrónico"
              name="email"
              placeholder="Ingresa su correo electrónico"
              variant="bordered"
            />
            <Input
              isRequired
              label="Usuario"
              name="email"
              placeholder="Ingresa su usuario"
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
              label="Contraseña"
              name="password"
              placeholder="Ingrese su contraseña"
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
              name="confirmPassword"
              placeholder="Repita su contraseña"
              type={isVisible ? "text" : "password"}
              variant="bordered"
            />
            <Button className="w-full" color="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
      </div>
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">O</p>
        <Divider className="flex-1" />
      </div>
      <div className="flex justify-center items-center text-sm">
        <Link to="/auth/sign-in">
          Ya tienes una cuenta?{" "}
          <span className="text-primary">Inicia sesión aquí</span>
        </Link>
      </div>
    </>
  );
}
