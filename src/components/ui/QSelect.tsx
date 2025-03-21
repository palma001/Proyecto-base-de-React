/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import AsyncSelect from "react-select/async";
import { api } from "../../libs/axios";
import { useTheme } from "next-themes";
import { darkModeStyles } from "./theme/QSelect";

/**
 * Filter the select value
 * @param {string} inputValue the value to filter
 */
const filterColors = async (
  // inputValue?: string,
  services?: string,
  labelValue?: string,
  selectedValue?: string,
  options: Array<any> = []
) => {
  if (services) {
    const { data } = await api.get(services);
    return data.map((option: any) => {
      return {
        label: option[labelValue || "label"],
        value: option[selectedValue || "value"],
      };
    });
  }
  return options;
};
/**
 * Load select options
 * @param {string} inputValue the value to filter
 * @param {callback} callback the function async
 */
const loadOptions = (
  inputValue?: string,
  callback?: (data?: any) => void,
  services?: string,
  labelValue?: string,
  selectedValue?: string,
  options = []
) => {
  filterColors(inputValue, services, labelValue, selectedValue, options).then(
    (res) => {
      if (callback) callback(res);
    }
  );
};

const QSelect = React.forwardRef(
  (
    {
      label,
      name,
      services,
      disabled,
      labelValue,
      selectedValue,
      defaultValue,
      handlerValue,
      errorMessage,
      options = [],
    }: any,
    ref: any
  ) => {
    /**
     * Theme state
     * @type {object}
     */
    const { theme } = useTheme();
    /**
     * Convert the default value to the format expected by the component.
     * @type {{ label: string, value: string } | null}
     */
    const defaultValueConverted = React.useMemo(() => {
      if (defaultValue) {
        return {
          label: defaultValue[labelValue || "label"],
          value: defaultValue[selectedValue || "value"],
        };
      }
      return null;
    }, [defaultValue]);

    return (
      <>
        <label htmlFor={`react-select-name-${label}`}>{label}</label>
        <AsyncSelect
          ref={ref}
          cacheOptions
          defaultOptions
          defaultValue={defaultValueConverted}
          isDisabled={disabled}
          placeholder={label}
          instanceId={`react-select-${name}`}
          onChange={handlerValue}
          loadOptions={(input: any, callback: any) =>
            loadOptions(
              input,
              callback,
              services,
              labelValue,
              selectedValue,
              options
            )
          }
          styles={
            theme === "dark"
              ? darkModeStyles
              : {
                  control: (baseStyles: any) => ({
                    ...baseStyles,
                    borderRadius: "10px",
                    height: "55px",
                    boxShadow: "none",
                    border: "none",
                    backgroundColor: "#F4F4F5",
                  }),
                  menu: (baseStyles: any) => ({
                    ...baseStyles,
                    zIndex: 20,
                    backgroundColor: "#F4F4F5",
                  }),
                }
          }
        />
        <span className="text-red-500 mt-1">{errorMessage}</span>
      </>
    );
  }
);

export default QSelect;
