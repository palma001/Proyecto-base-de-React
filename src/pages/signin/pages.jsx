/* eslint-disable react/prop-types */
import React from "react";
import {
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { signInRule } from "../../rules/signInRule";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { post } from "../../libs/axios";
import { authenticationStore } from "../../store/authorization";
import LogoPDVSA from "../../assets/pdvsa-logo-white.png";
import bgImage from "../../assets/login-bg.png";
import { IoMdMail } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";

export default function SignIn() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { handlerSession } = authenticationStore();

  const {
    register: signInRegister,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: sigInsError },
  } = useForm({
    resolver: zodResolver(signInRule),
  });
  /**
   * Sign in
   * @param {Object} values values of form
   * @returns
   */
  const signIn = async (values) => {
    try {
      setLoading(true);
      const { data, status, message } = await post("auth/login", values);
      console.log(data);
      if (status) {
        handlerSession({
          ...data.token.original,
          user: data,
        });
        navigate("/admin/profile");
        return;
      }
      toast.error(message);
      return;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  /**
   * Error sign in component
   * @param {String} name name of error
   * @returns {JSX.Element} JSX element
   */
  const ErrorSignInComponent = ({ name }) => {
    return <>{sigInsError[name] ? sigInsError[name]?.message : ""}</>;
  };

  return (
    <>
      <img src={bgImage} alt="login-bg" className="w-full h-full absolute" />
      <div className="w-full h-full absolute top-0 left-0 bg-red-900 opacity-50" />
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <img src={LogoPDVSA} alt="logo" className="relative w-60 mb-8" />
        <Card className="max-w-full w-[360px] md:w-[440px] p-2">
          <CardHeader>
            <div className="w-full flex justify-center items-center text-2xl font-semibold">
              Iniciar sesión
            </div>
          </CardHeader>
          <CardBody className="overflow-hidden">
            <form
              className="flex flex-col"
              onSubmit={handleSubmitSignIn(signIn)}>
              <Input
                isRequired
                className="mb-[7px]"
                label="Correo o nombre de usuario"
                placeholder="Ingresa tu correo o nombre se usuario..."
                endContent={<IoMdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                type="text"
                variant="bordered"
                isInvalid={!!sigInsError?.username}
                errorMessage={<ErrorSignInComponent name="username" />}
                {...signInRegister("username")}
              />
              <Input
                isRequired
                className="mb-4"
                label="Clave"
                placeholder="Ingresa tu contraseña"
                endContent={<IoLockClosed className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                type="password"
                variant="bordered"
                isInvalid={!!sigInsError?.password}
                errorMessage={<ErrorSignInComponent name="password" />}
                {...signInRegister("password")}
              />

              <div className="flex justify-end">
                <Button
                  fullWidth
                  className="text-base h-11 rounded-small bg-[#E6192F] mb-4"
                  color="primary"
                  type="submit"
                  isLoading={loading}>
                  Iniciar sesión
                </Button>
              </div>

              <div className="w-full flex justify-end">
                <Link href="#" color="danger" className="font-medium">
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </form>
          </CardBody>
          <p className=" text-center text-sm text-default-400 w-full py-3">
        Powered By Karanta Dev.
      </p>
        </Card>

        <Toaster richColors closeButton position="top-center" />
      </div>
    </>
  );
}
