/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Theme light mode for react-select
 * @type {object}
 */
export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "0px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected && "grey",
  }),
};
/**
 * Theme dark mode for react-select
 * @type {object}
 */
export const darkModeStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: "10px",
    height: "55px",
    boxShadow: "none",
    border: "none",
    backgroundColor: "#27272A",
    "&:hover": {
      borderColor: "grey",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "grey" : "#222",
    color: state.isSelected ? "#fff" : "#ccc",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#222",
    color: "#ccc",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#ccc",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "#ccc",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#aaa",
  }),
};
