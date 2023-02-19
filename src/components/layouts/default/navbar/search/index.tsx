import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps extends React.PropsWithChildren {}

export const Search: React.FunctionComponent<SearchProps> = (): JSX.Element => {
  const [search, setSearch] = useState(true);
  const [input, setInput] = useState("");

  const searchOpenHandler = () => {
    setSearch(false);
  };

  const searchCloseHandler = () => {
    setSearch(true);
    setInput("");
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex cursor-pointer  rounded-2xl bg-light-primary p-1  dark:bg-dark-primary">
      <input
        onFocus={searchOpenHandler}
        type="text"
        onChange={inputHandler}
        value={input}
        className={`${
          search ? "w-0" : "w-40 md:w-64"
        } rounded-md bg-light-primary px-2 font-thin outline-none transition-all duration-300 ease-out dark:bg-dark-primary dark:text-dark-content`}
      />
      <AiOutlineSearch
        onClick={searchCloseHandler}
        className="h-6 w-6 -scale-x-90 cursor-pointer text-light-heading transition-all duration-300 hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
        size={25}
      />
    </div>
  );
};
