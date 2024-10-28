/**
 * Theme light mode for react-select
 * @type {object}
 */
export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "0px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected && "grey",
  }),
};
/**
 * Theme dark mode for react-select
 * @type {object}
 */
export const darkModeStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    borderColor: state.isFocused ? "grey" : "inherit",
    "&:hover": {
      borderColor: "grey",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "grey" : "#222",
    color: state.isSelected ? "#fff" : "#ccc",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#222",
    color: "#ccc",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#ccc",
  }),
  input: (provided) => ({
    ...provided,
    color: "#ccc",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#aaa",
  }),
};
