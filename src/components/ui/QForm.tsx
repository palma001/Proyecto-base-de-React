/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import QT from "./QT";
import { FaImage, FaX } from "react-icons/fa6";
import Drop from "./Drop";
import QSelect from "./QSelect";
import JsonField from "./Form/JsonField";

const QForm = ({
  loading,
  config,
  handlerSubmit,
  children,
  buttons,
  otherInputs,
  defaultValues,
}: any) => {
  const { fields, formSchema, disable, entity } = config;
  const [file, setFile]: any = React.useState({});

  useEffect(() => {
    if (!loading) form.reset();
  }, [loading]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const convertToFormData = (data: any): FormData => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]: any) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, JSON.stringify(item));
        });
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  };

  function onSubmit(values: any) {
    if (handlerSubmit) handlerSubmit(convertToFormData(values));
  }

  const handlerFile = (file: any, name: string) => {
    setFile({ [name]: file });
  };

  const ErrorSignInComponent = ({ name }: any) => {
    const error: any = form.formState.errors[name];
    return <>{error && error?.message}</>;
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={() => {
          form.reset();
          setFile({});
        }}
      >
        {fields.map((f: any, index: number) => (
          <div key={index} className="mt-2">
            <FormComponent
              props={f}
              form={form}
              disable={disable}
              entity={entity}
              handlerFile={handlerFile}
              file={file}
              defaultValues={defaultValues}
              ErrorSignInComponent={ErrorSignInComponent}
            />
          </div>
        ))}
        {otherInputs && otherInputs(form, ErrorSignInComponent)}
        {children}
        {!disable && (
          <div className="flex justify-end w-full mt-2">
            <div className="flex gap-2">
              {buttons}
              <Button type="reset" variant="bordered">
                <QT word="common.clear" />
              </Button>
              <Button type="submit" color="primary" isLoading={loading}>
                <QT word={loading ? "common.loading" : "common.save"} />
              </Button>
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

interface FormComponentProps {
  props: any;
  form: any;
  disable: boolean;
  entity: string;
  handlerFile: (file: any, name: string) => void;
  file: any;
  defaultValues: any;
  ErrorSignInComponent: (props: any) => JSX.Element;
}

const FormComponent = ({
  props,
  form,
  disable,
  entity,
  handlerFile,
  file,
  defaultValues,
  ErrorSignInComponent,
}: FormComponentProps) => {
  /**
   * Handler select value
   * @param {string} name name of select
   * @param {Object} data data of select
   */
  const handlerSelectValue = (name: string, data: any) => {
    if (typeof data.value === "string" && !isNaN(Number(data.value))) {
      form.setValue(name, Number(data.value));
    } else {
      form.setValue(name, data.value);
    }
  };

  switch (props.component) {
    case "q-input":
      return (
        <Input
          {...props}
          {...form.register(props.name)}
          id={`form-${props.name}`}
          disabled={disable}
          label={props.label || <QT word={`${entity}.${props.name}`} />}
          defaultValue={form.getValues(props.name)}
          isInvalid={!!form.formState.errors[props.name]}
          errorMessage={<ErrorSignInComponent name={props.name} />}
        />
      );
    case "q-select":
      return (
        <QSelect
          size="sm"
          {...props}
          {...form.register(props.name)}
          handlerValue={(data: any) => handlerSelectValue(props.name, data)}
          id={`form-${props.name}`}
          disabled={disable}
          defaultValue={form.getValues(props.defaultValueField)}
          errorMessage={<ErrorSignInComponent name={props.name} />}
        />
      );
    case "q-dropzone":
      return (
        <div
          className={`flex flex-col gap-2 justify-center items-center p-4 border-collapse border-2 border-dashed rounded-md ${
            form.formState?.errors[props.name]
              ? "border-danger"
              : "border-gray-300"
          }`}
        >
          {file[props.name] ||
          (defaultValues && defaultValues[`${props.name}Url`]) ? (
            <div className="w-full  relative flex justify-center items-center">
              <img
                src={
                  (defaultValues && defaultValues[`${props.name}Url`]) ||
                  URL.createObjectURL(file[props.name])
                }
                alt="file"
                className="h-52 object-center"
              />
              <Button
                isIconOnly
                variant="bordered"
                color="danger"
                className="absolute top-0 right-0"
                onPress={() => {
                  delete file[props.name];
                  delete defaultValues[`${props.name}Url`];
                  handlerFile({}, props.name);
                }}
              >
                <FaX className="size-4" />
              </Button>
            </div>
          ) : (
            <Controller
              control={form.control}
              name={props.name}
              render={({ field: { onChange } }) => (
                <Drop
                  onLoaded={(files: any) => {
                    onChange(files);
                    handlerFile(files[0], props.name);
                    form.setValue(props.name, files);
                  }}
                >
                  <div className="bg-[rgba(0,0,0,0.7)] text-white p-3 rounded-full cursor-pointer hover:bg-primary">
                    <FaImage className="text-2xl pointer-events-none size-10" />
                  </div>
                </Drop>
              )}
            />
          )}
          <span className="text-lg text-gray-500 text-center">
            {props.label}
          </span>
          {form.formState?.errors[props.name] && (
            <span className="text-danger text-tiny text-center">
              <ErrorSignInComponent name={props.name} />
            </span>
          )}
        </div>
      );
    case "q-textarea":
      return (
        <Textarea
          {...props}
          {...form.register(props.name)}
          id={`form-${props.name}`}
          disabled={disable}
          label={props.label}
          defaultValue={form.getValues(props.name)}
          isInvalid={!!form.formState.errors[props.name]}
          errorMessage={<ErrorSignInComponent name={props.name} />}
        />
      );
    case "q-json-field":
      return (
        <div className="flex flex-col gap-2">
          {props.label && (
            <label
              className="text-large font-bold"
              htmlFor={`form-${props.name}`}
            >
              {props.label}
            </label>
          )}
          <JsonField
            {...props}
            id={`form-${props.name}`}
            disabled={disable}
            isInvalid={!!form.formState.errors[props.name]}
            errorMessage={<ErrorSignInComponent name={props.name} />}
          />
        </div>
      );
    default:
      return <>Component not found</>;
  }
};

export default QForm;
