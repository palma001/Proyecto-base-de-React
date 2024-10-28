/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useEffect } from "react";
// import QT from "./QT";

export default function QAutocomplete({
  disable,
  name,
  label,
  labelValue,
  descriptionSpan,
  selectedValue,
  register,
  isInvalid,
  errorMessage,
  defaultValue,
  handlerValue,
}) {
  /**
   * Autocomplete options
   * @type {Array}
   */
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
      const optionFund = options.find((option) => option.id === defaultValue);
      if (optionFund) {
        setValue(optionFund?.id);
      }
    }
  }, [options]);

  const handlerOption = (data) => {
    setValue(data);
  };
  /**
   * Get and set options of autocomplete
   */
  const get = async () => {
    // try {
    //   if (services) {
    //     let data = [];
    //     if (where) {
    //       data = await firebase.get(services, [where]);
    //     } else {
    //       data = await firebase.get(services);
    //     }
    //     setOptions(data);
    //   }
    // } catch (error: any) {
    //   throw new Error(error);
    // }
  };
  return (
    <Autocomplete
      id={`autocomplete-${name}`}
      disabled={disable}
      label={label}
      defaultItems={options}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      selectedKey={value}
      onSelectionChange={handlerOption}
      isClearable
      {...register}
      m
    >
      {(option) => (
        <AutocompleteItem
          key={selectedValue && option[selectedValue]}
          textValue={
            labelValue && typeof labelValue === "function"
              ? labelValue(option)
              : labelValue && option[labelValue]
          }
        >
          <div className="flex flex-col">
            <span>
              {labelValue && typeof labelValue === "function"
                ? labelValue(option)
                : labelValue && option[labelValue]}
            </span>
            <span className="text-gray-500 text-sm">
              {descriptionSpan && typeof descriptionSpan === "function"
                ? descriptionSpan(option)
                : descriptionSpan && option[descriptionSpan]}
            </span>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
