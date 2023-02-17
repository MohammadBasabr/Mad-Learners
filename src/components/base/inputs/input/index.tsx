import React from "react";

interface InputProps extends React.PropsWithChildren {
  touch: any;
  error?: any;
  data: any;
  onChange: any;
  onFocus: any;
  type: string;
  id: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  id,
  type,
  touch,
  error,
  data,
  onChange,
  onFocus,
}): JSX.Element => {
  console.log(touch.id);
  console.log(error.id);
  return (
    <input
      id={id}
      className={`h-20 w-full rounded-md bg-light-secondary p-3 outline-none dark:bg-dark-secondary ${
        touch.id && error.id
          ? "ring-2 ring-light-error dark:ring-dark-error"
          : "ring-0"
      } `}
      type={type}
      name={id}
      value={data.id}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default Input;
