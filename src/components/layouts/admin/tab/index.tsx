import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface AdminTabProps extends React.PropsWithChildren {
  title: string;
  to: string;
}

const AdminTab: React.FunctionComponent<AdminTabProps> = ({
  children,
  title,
  to,
}): JSX.Element => {
  const router = useRouter();

  return (
    <Link
      href={to}
      className={`${
        router.pathname === to
          ? "rounded-l-md ml-auto text-dark-hover"
          : "rounded-md mx-auto"
      } relative group overflow-hidden text-dark-content w-[80%] md:w-[90%] aspect-square md:aspect-auto flex py-2 md:pr-8 md:pl-3 bg-dark-secondary gap-2 justify-center items-center cursor-pointer`}
    >
      <div className="bg-dark-hover absolute w-0 rounded-full ease-in aspect-square transition-all duration-500 group-hover:w-[200%]"></div>
      <div className="flex gap-2 items-center z-10 group-hover:text-dark-secondary ease-in transition-all duration-500">
        {children}
        <div className="hidden md:block uppercase">{title}</div>
      </div>
    </Link>
  );
};

export default AdminTab;
