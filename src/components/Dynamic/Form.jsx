/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import QSelect from "./QSelect";
import { FaFileCircleCheck, FaFileCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
// import { useRouter } from "next/navigation";

export default function FormComponent({
  loading = false,
  config,
  handlerSubmit,
  defaultValues,
}) {
  const { fields, formSchema, disable } = config;

  const navigation = useNavigate();

  const getDefaultValue = () => {
    const value = {};
    fields.map((field) => {
      if (field?.value) {
        value[field?.name] = field?.value || "";
      } else {
        if (field.component === "q-input") {
          value[field?.name] = "";
        } else {
          value[field?.name] = null;
        }
      }
    });
    return value;
  };

  const setObjectValues = (value) => {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const element = value[key];
        if (element && typeof element === "object") {
          fields.forEach((field) => {
            const { labelValue, component } = field;
            if (component === "q-select") {
              value[key] = {
                label: element[labelValue || "name"]
                  ? element[labelValue || "name"]
                  : element.label,
                value: element[labelValue || "id"]
                  ? element[labelValue || "id"]
                  : element.value,
              };
            }
          });
        }
      }
    }
    return value;
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: setObjectValues(defaultValues) || getDefaultValue(),
  });

  const handlerSelectValue = (name, data) => {
    form.setValue(name, data.value);
  };

  const formatObject = (values) => {
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const element = values[key];
        if (element && typeof element === "object") {
          values[`${key}_id`] = values[key].value;
        }
      }
    }
    return values;
  };

  const ErrorSignInComponent = ({ name }) => {
    return (
      <>
        {form.formState.errors[name]
          ? form?.formState?.errors[name]?.message
          : ""}
      </>
    );
  };

  function onSubmit(values) {
    handlerSubmit(formatObject(values));
  }

  const setComponent = (props) => {
    switch (props.component) {
      case "q-input":
        return (
          <Input
            size="sm"
            variant="bordered"
            {...props}
            {...form.register(props.name)}
            id={`form-${props.name}`}
            label={props.label}
            disabled={disable}
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
            handlerValue={(data) => handlerSelectValue(props.name, data)}
            id={`form-${props.name}`}
            label={props.label}
            disabled={disable}
            defaultValue={form.getValues(props.name)}
            // isInvalid={!!form.formState.errors[props.name]}
            errorMessage={<ErrorSignInComponent name={props.name} />}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onReset={() => {
        form.reset();
      }}
    >
      <div className="grid gap-3">
        {fields.map((field, index) => (
          <div key={index}>{setComponent(field)}</div>
        ))}
      </div>
      {!disable && (
        <div className="grid justify-end mt-8">
          <div className="flex gap-3">
            <Button
              color="danger"
              variant="shadow"
              startContent={<FaFileCircleXmark className="size-5" />}
              onClick={() => {
                navigation(-1);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="shadow"
              startContent={<FaFileCircleCheck className="size-5" />}
              type="submit"
              className="bg-primary text-white"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Guardar"}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
