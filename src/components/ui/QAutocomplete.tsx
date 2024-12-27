/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Select, SelectItem } from "@nextui-org/react";
import React, { useEffect } from "react";
import { api } from "../../libs/axios";
// import QT from "./QT";

export default function QAutocomplete({
  isDisable,
  services,
  name,
  label,
  selectedValue,
  register,
  defaultValue,
  handlerValue,
}: any) {
  /**
   * Autocomplete options
   * @type {Array}
   */
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  /**
   * Autocomplete value selected
   * @type {Array}
   */
  const [value, setValue] = React.useState("");
  /**
   * Call function to set options
   */
  useEffect(() => {
    get();
    // if (defaultValue) setValue(selectedValue && defaultValue[selectedValue]);
  }, []);

  useEffect(() => {
    if (value) {
      const dataFund = options.find((option) => option.id === value);
      if (dataFund) handlerValue(dataFund);
      // if (defaultValue) setValue(selectedValue && defaultValue[selectedValue]);
    }
  }, [value]);
  /**
   * Set default value
   */
  useEffect(() => {
    if (selectedValue && defaultValue) {
      const optionFund: any = options.find(
        (option: any) => option.id === defaultValue
      );
      if (optionFund) {
        setValue(optionFund?.id);
      }
    }
  }, [options]);

  /**
   * Get and set options of autocomplete
   */
  const get = async () => {
    try {
      if (services) {
        setLoading(true);
        const { data } = await api.get(services);
        setOptions(data.data);
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Select {...register(name)} label={label} name={name} isDisable={isDisable}>
      {loading ? (
        <SelectItem key={"loading"}>Cargando ...</SelectItem>
      ) : (
        options.length > 0 &&
        options?.map((item: any) => (
          <SelectItem key={item.id} value={item.id}>
            {item.name}
          </SelectItem>
        ))
      )}
    </Select>
  );
}
