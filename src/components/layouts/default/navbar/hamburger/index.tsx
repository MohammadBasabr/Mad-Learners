import { useState } from "react";
import { NavItems } from "../navItem";

interface HamburgerItemProps extends React.PropsWithChildren {}

export const Hamburger: React.FunctionComponent<
  HamburgerItemProps
> = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const menuHandler = () => {
    setToggle(!toggle);
  };

  const closeHandler = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        onClick={menuHandler}
        className="flex h-5 cursor-pointer flex-col justify-between sm:hidden"
      >
        <div
          className={`h-px w-7 origin-left transition-all duration-300 ${
            toggle && "rotate-45"
          } bg-light-heading dark:bg-dark-heading`}
        ></div>
        <div
          className={`h-px w-7 transition-all duration-300 ${
            toggle && "-translate-x-7 opacity-0 "
          } bg-light-heading dark:bg-dark-heading`}
        ></div>
        <div
          className={`h-px w-7 origin-left transition-all duration-300 ${
            toggle && "-rotate-45"
          } bg-light-heading dark:bg-dark-heading`}
        ></div>
      </div>
      <ul
        className={`fixed top-11 ${
          !toggle && "-translate-x-full"
        } left-0 z-[20] mt-1 flex h-screen w-screen flex-col items-center justify-center gap-3 bg-light-secondary p-5 transition-all duration-300 dark:bg-dark-secondary`}
      >
        <NavItems onClick={closeHandler} title="home" url="/" />
        <NavItems onClick={closeHandler} title="courses" url="/courses" />
        <NavItems onClick={closeHandler} title="about" url="/about" />
        <NavItems onClick={closeHandler} title="contact" url="/contact" />
      </ul>
    </>
  );
};
