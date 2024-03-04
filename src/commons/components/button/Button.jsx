"use client";

const defaultOnClick = () => {};

const Button = ({ type = "button", onClick = defaultOnClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-fit bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded text-gray-50"
    >
      {children}
    </button>
  );
};

export const RedButton = ({ type = "button", onClick = defaultOnClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-fit bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-gray-50"
    >
      {children}
    </button>
  );
};

export default Button;
