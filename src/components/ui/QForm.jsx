/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import QT from "./QT";
import QAutocomplete from "./QAutocomplete";
import { formatDate } from "../../lib/firebase";

const QForm = ({
  loading,
  config,
  handlerSubmit,
  children,
  buttons,
  otherInputs,
}) => {
  /**
   * Config form
   * @type {Object} config form
   */
  const { fields, formSchema, defaultValues, disable, entity } = config;
  /**
   * Get default values
   * @returns value defaults
   */
  const getDefaultValue = () => {
    const value = {};
    fields.map((field) => {
      if (field?.value) {
        value[field?.name] = field?.value;
      } else {
        value[field?.name] = "";
      }
    });
    return value;
  };

  useEffect(() => {
    if (!loading) form.reset();
  }, [loading]);
  /**
   * Validate timestamp data
   * @param {object} date date to validate
   * @returns {boolean}
   */
  function isTimestampFirebase(dato) {
    if (typeof dato === "object" && dato !== null) {
      if ("seconds" in dato && "nanoseconds" in dato) {
        if (
          Number.isInteger(dato.seconds) &&
          Number.isInteger(dato.nanoseconds)
        ) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * Set values for select component
   * @param value value entity
   * @returns value formatted
   */
  const setObjectValues = (value) => {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const element = value[key];
        if (isTimestampFirebase(element)) {
          value[key] = formatDate(element, {});
        }
        if (element && typeof element === "object") {
          value[key] = element.id;
        }
      }
    }
    return value;
  };
  /**
   * Form schema object
   * @type {Object} schema
   */
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: setObjectValues(defaultValues) || getDefaultValue(),
  });
  /**
   * Form schema object
   * @type {Object} schema
   * @returns {Object} schema formatted
   */
  // const formatObject = (values: z.infer<typeof formSchema>) => {
  //   for (const key in values) {
  //     if (Object.prototype.hasOwnProperty.call(values, key)) {
  //       const element = values[key];
  //       if (typeof element === "object") {
  //         values[`${key}_id`] = values[key].value;
  //       }
  //     }
  //   }
  //   return values;
  // };
  const [autocomplete, setAutocomplete] = useState({});

  const handlerValue = (name, data) => {
    autocomplete[name] = data;
    setAutocomplete({ ...autocomplete });
  };

  /**
   * Handler submit event
   * @param {z.infer<typeof formSchema>} value validated
   */
  function onSubmit(values) {
    if (handlerSubmit) handlerSubmit({ ...values, ...autocomplete });
  }

  const ErrorSignInComponent = ({ name }) => {
    return (
      <>
        {form.formState.errors[name]
          ? form?.formState?.errors[name]?.message
          : ""}
      </>
    );
  };
  /**
   * Set components type
   * @param {props} props props config
   * @param {field} props props component of FormField
   */
  const setComponent = (props) => {
    switch (props.component) {
      case "q-input":
        return (
          <Input
            {...props}
            {...form.register(props.name)}
            id={`form-${props.name}`}
            label={props.label || <QT word={`${entity}.${props.name}`} />}
            defaultValue={form.getValues(props.name)}
            isInvalid={!!form.formState.errors[props.name]}
            errorMessage={<ErrorSignInComponent name={props.name} />}
          />
        );
      case "q-select":
        return (
          <QAutocomplete
            {...props}
            entity={entity}
            defaultValue={form.getValues(props.name)}
            register={form.register(props.name)}
            isInvalid={!!form.formState.errors[props.name]}
            errorMessage={<ErrorSignInComponent name={props.name} />}
            handlerValue={(data) => {
              // const auto = { ...autocomplete, [props.name]: data };
              // console.log({ [props.name]: data });
              handlerValue(props.name, data);
              // setAutocomplete({ [props.name]: data });
            }}
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
      {fields.map((f, index) => (
        <div key={index} className="mt-2">
          {setComponent(f)}
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
  );
};
export default QForm;
