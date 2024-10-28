/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from "react";
import AsyncSelect from "react-select/async";
import { customStyles, darkModeStyles } from "./theme/QSelect";
import { get } from "../../libs/axios";

/**
 * Filter the select value
 * @param {string} inputValue the value to filter
 */
const filterColors = async (
  inputValue,
  services,
  labelValue,
  selectedValue
) => {
  if (services) {
    const { data, status } = await get(services);
    if (!status) return [];
    return data.map((option) => {
      return {
        label: option[labelValue || "id"],
        value: option[selectedValue || "name"],
      };
    });
  }
  return [];
};
/**
 * Load select options
 * @param {string} inputValue the value to filter
 * @param {callback} callback the function async
 */
const loadOptions = (
  inputValue,
  callback,
  services,
  labelValue,
  selectedValue
) => {
  filterColors(inputValue, services, labelValue, selectedValue).then((res) => {
    callback(res);
  });
};

export default function QSelect({
  label,
  name,
  services,
  disabled,
  labelValue,
  selectedValue,
  defaultValue,
  handlerValue,
  errorMessage,
}) {
  // const { theme } = useTheme();
  /**
   * Set the theme app
   * @type {string}
   */
  const [themeDark, setThemeDark] = React.useState("light");
  /**
   * Set default object
   * @type {Object}
   */
  const [defaultObject, setDefaultObject] = React.useState(null);

  React.useEffect(() => {
    getValues();
  }, []);
  /*
   * Get default object
   */
  const getValues = async () => {
    const data = await filterColors("", services, labelValue, selectedValue);
    setDefaultObject(data.find((val) => val.value === defaultValue));
  };

  // React.useEffect(() => {
  //   setThemeDark(theme);
  // }, [theme]);

  return (
    <>
      <>
        <AsyncSelect
          cacheOptions
          defaultOptions
          defaultValue={defaultObject}
          isDisabled={disabled}
          placeholder={label}
          className="whitespace-nowrap rounded-md border border-input bg-transparent shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
          instanceId={`react-select-${name}`}
          styles={themeDark === "light" ? customStyles : darkModeStyles}
          loadOptions={(input, callback) =>
            loadOptions(input, callback, services, labelValue, selectedValue)
          }
          onChange={handlerValue}
        />
        <span className="text-red-500 mt-1">{errorMessage}</span>
      </>
    </>
  );
}
