/* eslint-disable react/prop-types */
import React from "react";
import { AuthContext } from "../../context/auth-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicRule, sessionRule } from "../../rules/profileRule";
import { toast } from "sonner";
import Drop from "../../components/ui/Drop";
import { post } from "../../libs/axios";
import { authenticationStore } from "../../store/authorization";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { FaCamera, FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Profile() {
  const { session, updateSession } = React.useContext(AuthContext);
  const [isPendingBasic, setIsPendingBasic] = React.useState(false);
  const [isPendingSession, setIsPendingSession] = React.useState(false);
  const { handlerSession } = authenticationStore();
  const [isVisible, setIsVisible] = React.useState(false);
  const [file, setFile] = React.useState(session?.user?.profile_picture);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    control,
    register: basicRegister,
    handleSubmit: handleSubmitBasic,
    formState: { errors: basicError },
  } = useForm({
    resolver: zodResolver(basicRule),
    defaultValues: {
      name: session.user.name,
      last_name: session.user.last_name,
    },
  });

  const {
    register: sessionRegister,
    handleSubmit: handleSubmitSession,
    formState: { errors: sessionError },
  } = useForm({
    resolver: zodResolver(sessionRule),
    defaultValues: session.user,
  });
  /**
   * Submit form data
   * @param {Object} values values of form
   * @returns {FormData} form data
   */
  const handlerFormData = (values) => {
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
  /**
   * Submit form data
   * @param {Object} values values of form
   * @param {String} url url of api
   * @param {Function} pending pending function
   * @returns {Promise} promise
   */
  const handlerData = async (values, url, pending) => {
    try {
      pending(true);
      const { data, status, message } = await post(
        `profile/${url}`,
        handlerFormData(values)
      );
      if (status) {
        handlerSession({
          ...session,
          user: data,
        });
        updateSession();
        toast.success("Datos actualizados exitosamente");
        return;
      }
      toast.error(message);
      return;
    } catch (error) {
      toast.error(error.message);
    } finally {
      pending(false);
    }
  };
  /**
   * Error visible
   * @param {String} name name of error
   * @param {Object} errors errors of form
   * @returns {JSX.Element} JSX element
   */
  const ErrorVisible = ({ name, errors }) => (
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
              <p className="text-tiny uppercase font-bold">Datos basicos</p>
            </CardHeader>
            <CardBody className="overflow-visible">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="relative grid gap-2 text-center">
                  <Avatar
                    isBordered
                    color={basicError?.profile_picture ? "danger" : "success"}
                    className="w-40 h-40"
                    classNames={{
                      base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                      icon: "text-black/80",
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
                          onLoaded={(files) => {
                            onChange(files);
                            setFile(files[0]);
                          }}
                        >
                          <div className="bg-[rgba(0,0,0,0.7)] text-white p-3 rounded-full cursor-pointer hover:bg-teal-700">
                            <FaCamera className="text-2xl pointer-events-none" />
                          </div>
                        </Drop>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:col-span-10">
                  <Input
                    autoComplete="on"
                    type="text"
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    isInvalid={!!basicError?.name}
                    {...basicRegister("name")}
                    errorMessage={
                      <ErrorVisible name="name" errors={basicError} />
                    }
                  />
                  <Input
                    autoComplete="on"
                    type="text"
                    label="Apellido"
                    placeholder="Ingrese su apellido"
                    isInvalid={!!basicError?.last_name}
                    {...basicRegister("last_name")}
                    errorMessage={
                      <ErrorVisible name="last_name" errors={basicError} />
                    }
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-end">
              <Button
                className="bg-teal-700 text-white"
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
                  isDisabled={!!session.user.username}
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
                className="bg-teal-700 text-white"
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
