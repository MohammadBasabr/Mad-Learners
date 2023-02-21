import React from "react";
import { Hamburger } from "./hamburger";
import { NavItems } from "./navItem";
import { Search } from "./search";
import { ShoppingBag } from "./shoppingBag";
import Toggle from "./toggle/Toggle";
import { User } from "./user";

interface NavProps extends React.PropsWithChildren {}

export const Nav: React.FunctionComponent<NavProps> = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-50 flex h-12 w-full items-center justify-between bg-light-secondary px-5 dark:bg-dark-secondary">
      <div className="flex items-center">
        <ul className="hidden gap-5 sm:flex">
          <NavItems title="home" url="/" />
          <NavItems title="courses" url="/lessons" />
          <NavItems title="about" url="/about" />
          <NavItems title="contact" url="/contact" />
        </ul>
        <Hamburger />
      </div>
      <div className="bg-dark-p flex gap-2 ">
        <Search />
        <ShoppingBag url="/shoppingbag" />
        <User url="/signup" />
        <Toggle />
      </div>
    </nav>
  );
};
