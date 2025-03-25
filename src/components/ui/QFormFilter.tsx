/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Form, Input, Textarea } from "@heroui/react";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";
import QT from "./QT";
import QSelect from "./QSelect";
import { title } from "../primitives";

const QFormFilter = ({
  loading,
  config,
  handlerSubmit,
  children,
  buttons,
}: any) => {
  /**
   * Config form
   * @type {Object} config form
   */
  const { fields, disable, entity } = config;

  useEffect(() => {
    if (!loading) form.reset();
  }, [loading]);
  /**
   * Form schema object
   * @type {Object} schema
   */
  const form = useForm({});
  /**
   * Handler select value
   * @param {String} name name of component
   * @param {Object} data data of component
   */
  const handlerSelectValue = (name: string, data: any) => {
    form.setValue(name, data.value);
  };
  /**
   * Handler submit event
   * @param {z.infer<typeof formSchema>} value validated
   */
  function onSubmit(e: any) {
    e.preventDefault();
    if (handlerSubmit) handlerSubmit(form.getValues());
  }
  /**
   * Set components type
   * @param {props} props props config
   * @param {field} props props component of FormField
   */
  const setComponent = (props: any) => {
    switch (props.component) {
      case "q-input":
        return (
          <Input
            {...props}
            {...form.register(props.name)}
            required={false}
            id={`form-${props.name}`}
            label={props.label || <QT word={`${entity}.${props.name}`} />}
            defaultValue={form.getValues(props.name)}
          />
        );
      case "q-select":
        return (
          <QSelect
            {...props}
            {...form.register(props.name)}
            size="sm"
            handlerValue={(data: any) => handlerSelectValue(props.name, data)}
            id={`form-${props.name}`}
            disabled={disable}
            defaultValue={form.getValues(props.name)}
          />
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
          />
        );
      default:
        return <>Component not found</>;
    }
  };

  return (
    // <form
    //   onReset={() => {
    //   }}
    // >
    <Form
      className="w-full p-4"
      onSubmit={onSubmit}
      onReset={() => {
        form.reset();
        handlerSubmit({});
      }}
    >
      <div className="min-h-[calc(100vh-285px)] overflow-auto w-full">
        <span className={title({ size: "xs" })}>Filtros</span>
        {fields.map((f: any, index: number) => (
          <div key={index} className="w-full">
            {f.filter && (
              <div key={index} className="mt-2 w-full px-1">
                {setComponent(f)}
              </div>
            )}
          </div>
        ))}
      </div>
      {children}
      <div className="flex justify-end w-full mt-2">
        <div className="flex gap-2">
          {buttons}
          <Button type="reset" variant="bordered">
            <QT word="common.clear" />
          </Button>
          <Button type="submit" color="primary" isLoading={loading}>
            <QT word={loading ? "common.loading" : "common.filter"} />
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default QFormFilter;
