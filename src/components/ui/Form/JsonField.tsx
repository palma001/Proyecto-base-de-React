/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FaTrash } from "react-icons/fa6";

const JsonField = ({ name }: any) => {
  /**
   * Form context
   * @type {Object}
   */
  const { control, register, formState }: any = useFormContext();
  /**
   * Field array
   * @type {Array}
   */
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  React.useEffect(() => {
    if (fields.length === 0) {
      append({ key: "", value: "" });
    }
  }, [fields.length]);

  return (
    <div className="p-1 shadow-medium rounded-xl dark:bg-gray-900">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Valor</th>
            <th className="p-2">
              <></>
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={field.id}>
              <td className="w-[45%] p-2">
                <Input
                  type="text"
                  placeholder="Llave"
                  {...register(`${name}.${index}.key`)}
                  isInvalid={
                    !!formState?.errors[name] &&
                    !!formState?.errors[name][index]?.key
                  }
                  errorMessage={
                    formState?.errors[name]?.[index]?.key && (
                      <>{formState?.errors[name][index]?.key?.message}</>
                    )
                  }
                />
              </td>
              <td className="w-[45%] p-2">
                <Input
                  type="text"
                  placeholder="Valor"
                  {...register(`${name}.${index}.value`)}
                  isInvalid={
                    !!formState?.errors[name] &&
                    !!formState?.errors[name][index]?.value
                  }
                  errorMessage={
                    formState?.errors[name]?.[index]?.value && (
                      <>{formState?.errors[name][index]?.value?.message}</>
                    )
                  }
                />
              </td>
              <td className="w-[10%] p-2 text-right">
                {fields.length > 1 && (
                  <Button
                    isIconOnly
                    color="danger"
                    onPress={() => remove(index)}
                  >
                    <FaTrash />
                  </Button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <Button
                onPress={() => append({ key: "", value: "" })}
                type="button"
                color="secondary"
              >
                Agregar otro
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JsonField;
