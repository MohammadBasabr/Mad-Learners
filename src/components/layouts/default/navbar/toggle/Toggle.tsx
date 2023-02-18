import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

interface ToggleProps extends React.PropsWithChildren {}

const Toggle: React.FunctionComponent<ToggleProps> = (): JSX.Element => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    darkModeHandler();
  }, []);

  const darkModeHandler = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.className = "dark";
      setToggle(false);
    } else {
      document.documentElement.className = "";
    }
  };

  const toggleHandler = () => {
    setToggle(!toggle);
    if (toggle) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    darkModeHandler();
  };

  return (
    <div
      onClick={toggleHandler}
      className="relative flex cursor-pointer justify-between rounded-2xl p-1 text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
    >
      {toggle ? (
        <HiOutlineMoon size={25} className="" />
      ) : (
        <HiOutlineSun size={25} className="" />
      )}
    </div>
  );
};

export default Toggle;
