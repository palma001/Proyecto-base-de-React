/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Button,
  Input,
  Checkbox,
  Link,
  Form,
  Divider,
} from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ROUTES } from "../../routes/routes";
import { api } from "../../libs/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { authenticationStore } from "../../stores/authorization";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { handlerSession } = authenticationStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const formData = Object.fromEntries(new FormData(event.currentTarget));
      const { data } = await api.post("/auth/login", formData);
      handlerSession(data);
      navigate("/admin/home");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-2">
          <p className="text-xl font-medium">Bienvenido</p>
          <p className="text-small text-default-500">
            Inicie sesión en su cuenta para continuar
          </p>
        </div>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            label="Usuario o correo"
            name="username"
            placeholder="Ingresa su usuario o correo"
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
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox name="remember" size="sm">
              Recuérdame
            </Checkbox>
            <Link className="text-default-500" href="#" size="sm">
              Olvidé mi contraseña
            </Link>
          </div>
          <Button
            className="w-full"
            color="primary"
            type="submit"
            isLoading={isLoading}
          >
            Iniciar
          </Button>
        </Form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">O</p>
          <Divider className="flex-1" />
        </div>
        {/* <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
          <Button
            startContent={
              <Icon className="text-default-500" icon="fe:github" width={24} />
            }
            variant="bordered"
          >
            Continue with Github
          </Button>
        </div> */}
        <p className="text-center text-small">
          ¿Necesitas crear una cuenta?&nbsp;
          <Link href={ROUTES.REGISTER} size="sm">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
