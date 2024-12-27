/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { authenticationStore } from "../../stores/authorization";
import Drop from "../../components/ui/Drop";
import { basicRule, sessionRule } from "../../rules/profileRule";
import { FaCamera, FaEye, FaEyeSlash } from "react-icons/fa6";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { api } from "../../libs/axios";

type BasicForm = {
  name: string;
  phone_number: string;
  profile_picture?: File | null;
};

type ChangePasswordForm = {
  email: string;
  password?: string;
  username?: string;
};

export default function Profile() {
  const { handlerSession, getSession } = authenticationStore();
  const session = getSession();
  const [isPendingBasic, setIsPendingBasic] = React.useState(false);
  const [isPendingSession, setIsPendingSession] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [file, setFile] = React.useState(session?.user?.profile_picture);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    control,
    register: basicRegister,
    handleSubmit: handleSubmitBasic,
    formState: { errors: basicError },
  } = useForm<BasicForm>({
    resolver: zodResolver(basicRule),
    defaultValues: {
      name: session?.user?.name,
      phone_number: session?.user?.phone_number,
    },
  });

  const {
    register: sessionRegister,
    handleSubmit: handleSubmitSession,
    formState: { errors: sessionError },
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(sessionRule),
    defaultValues: {
      email: session?.user?.email,
      username: session?.user?.username,
      password: "",
    },
  });

  const handlerFormData = (values: any) => {
    const formData = new FormData();
    for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        const element = values[key];
        if (element) {
          if (typeof element === "object") {
            formData.append(key, element[0]);
          } else {
            formData.append(key, element);
          }
        }
      }
    }
    return formData;
  };

  const handlerData = async (
    values: any,
    url: string,
    pending: (data: boolean) => void
  ) => {
    try {
      pending(true);
      const { data } = await api.post(
        `profile/${url}`,
        handlerFormData(values)
      );
      handlerSession({
        ...session,
        user: data,
      });
      toast.success("Datos actualizados exitosamente");
      return;
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      pending(false);
    }
  };

  const ErrorVisible = ({ name, errors }: any) => (
    <>{errors[name] ? errors[name]?.message : ""}</>
  );

  return (
    <div className="w-full justify-center grid">
      <div className="grid gap-2 px-2 w-screen md:max-w-[560px] lg:max-w-[850px]">
        <h1 className="text-medium uppercase font-bold">Datos de perfil</h1>
        <form
          onSubmit={handleSubmitBasic((values) =>
            handlerData(values, "basic-data", setIsPendingBasic)
          )}
        >
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Datos básicos</p>
            </CardHeader>
            <CardBody className="overflow-visible">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="relative grid gap-2 text-center">
                  <Avatar
                    isBordered
                    color={basicError?.profile_picture ? "danger" : "success"}
                    className="w-36 h-36"
                    classNames={{
                      base: "bg-gradient-to-br from-primary to-secondary",
                      icon: "text-white",
                    }}
                    src={
                      file
                        ? typeof file === "string"
                          ? file
                          : URL.createObjectURL(file)
                        : file
                    }
                  />
                  {basicError?.profile_picture && (
                    <span className="text-danger text-tiny absolute bottom-[-40px] left-0 right-0 text-center">
                      <ErrorVisible
                        name="profile_picture"
                        errors={basicError}
                      />
                    </span>
                  )}
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <Controller
                      control={control}
                      name="profile_picture"
                      render={({ field: { onChange } }) => (
                        <Drop
                          onLoaded={(files: any) => {
                            onChange(files);
                            setFile(files[0]);
                          }}
                        >
                          <div className="bg-[rgba(0,0,0,0.7)] text-white p-3 rounded-full cursor-pointer hover:bg-primary">
                            <FaCamera className="text-2xl pointer-events-none" />
                          </div>
                        </Drop>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:col-span-10 gap-3">
                  <Input
                    {...basicRegister("name")}
                    autoComplete="on"
                    type="text"
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    isInvalid={!!basicError?.name}
                    errorMessage={
                      <ErrorVisible name="name" errors={basicError} />
                    }
                  />
                  <Input
                    {...basicRegister("phone_number")}
                    autoComplete="on"
                    type="text"
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    isInvalid={!!basicError?.phone_number}
                    errorMessage={
                      <ErrorVisible name="phone_number" errors={basicError} />
                    }
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-end">
              <Button
                className="bg-primary text-white"
                type="submit"
                isLoading={isPendingBasic}
              >
                Guardar
              </Button>
            </CardFooter>
          </Card>
        </form>
        <form
          onSubmit={handleSubmitSession((values) =>
            handlerData(values, "session-data", setIsPendingSession)
          )}
        >
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Datos de sesión</p>
            </CardHeader>
            <CardBody className="overflow-visible">
              <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-2">
                <Input
                  autoComplete="on"
                  type="email"
                  label="Correo electrónico"
                  placeholder="Ingrese su correo electrónico"
                  isInvalid={!!sessionError?.email}
                  {...sessionRegister("email")}
                  errorMessage={
                    <ErrorVisible name="email" errors={sessionError} />
                  }
                />
                <Input
                  autoComplete="on"
                  type="text"
                  label="Nombre de usuario"
                  placeholder="Ingrese su nombre de usuario"
                  isDisabled={!!session?.user?.username}
                  isInvalid={!!sessionError?.username}
                  {...sessionRegister("username")}
                  errorMessage={
                    <ErrorVisible name="username" errors={sessionError} />
                  }
                />
                <Input
                  label="Clave"
                  placeholder="Ingrese su clave"
                  isInvalid={!!sessionError?.password}
                  {...sessionRegister("password")}
                  type={isVisible ? "text" : "password"}
                  errorMessage={
                    <ErrorVisible name="password" errors={sessionError} />
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
              </div>
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-end">
              <Button
                className="bg-primary text-white"
                type="submit"
                isLoading={isPendingSession}
              >
                Guardar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
