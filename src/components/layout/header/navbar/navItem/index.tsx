import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";

interface NavItemProps extends React.PropsWithChildren {
  title: string;
  url?: string;
  onClick?: MouseEventHandler;
}

export const NavItems: React.FunctionComponent<NavItemProps> = ({
  title,
  url,
  onClick,
}): JSX.Element => {
  const router = useRouter();

  return (
    <li
      onClick={onClick}
      className="cursor-pointer select-none font-bold uppercase transition-all duration-300 hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
    >
      <Link
        href={`${url}`}
        className={`${
          router.pathname === url
            ? "text-light-hover dark:text-dark-hover"
            : "text-light-content dark:text-dark-content"
        }`}
      >
        {title}
      </Link>
    </li>
  );
};
