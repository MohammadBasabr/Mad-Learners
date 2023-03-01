import { useState } from "react";
import StudentSignIn from "./student";
import EmployeeSignIn from "./employee";

interface SignInProps extends React.PropsWithChildren {}

export const SignIn: React.FunctionComponent<SignInProps> = (): JSX.Element => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleTrue = () => {
    setToggle(true);
  };

  const handleToggleFalse = () => {
    setToggle(false);
  };
  return (
    <section className="flex flex-col h-[calc(100vh-96px)] w-full items-center justify-between bg-light-primary dark:bg-dark-primary md:h-[calc(100vh-176px)] md:p-6">
      <div className="w-full h-10 flex lg:hidden text-light-heading dark:text-dark-heading gap-5 uppercase font-bold justify-center items-center">
        <span
          onClick={handleToggleTrue}
          className={`${
            toggle && "text-light-hover dark:text-dark-hover"
          } cursor-pointer`}
        >
          student
        </span>
        <span
          onClick={handleToggleFalse}
          className={`${
            !toggle && "text-light-hover dark:text-dark-hover"
          } cursor-pointer`}
        >
          employee
        </span>
      </div>
      <div className="relative flex w-full h-full">
        <div
          className={`${
            toggle && "translate-x-full"
          } w-1/2 absolute hidden bg-dark-primary transition-all duration-500 lg:flex justify-center items-center uppercase text-3xl text-dark-content h-full`}
        >
          <span
            className=" cursor-pointer pt-2 group hover:text-light-hover dark:hover:text-dark-hover "
            onClick={handleToggle}
          >
            Sign in as {` ${toggle ? "an employee" : "a student"}`}
          </span>
        </div>
        <div className={`lg:w-1/2 w-full ${!toggle && "hidden"} lg:flex`}>
          <StudentSignIn />
        </div>
        <div className={`lg:w-1/2 w-full ${toggle && "hidden"} lg:flex`}>
          <EmployeeSignIn />
        </div>
      </div>
    </section>
  );
};
