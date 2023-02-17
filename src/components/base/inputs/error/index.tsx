import React from "react";

interface ErrorProps extends React.PropsWithChildren {
  errorName: string;
}

const Error: React.FunctionComponent<ErrorProps> = ({
  errorName,
}): JSX.Element => {
  return (
    <span className="mt-[5px] h-[10px] w-full rounded-[3px] p-2 text-right leading-[10px] text-light-error dark:text-dark-error">
      {errorName}
    </span>
  );
};

export default Error;
