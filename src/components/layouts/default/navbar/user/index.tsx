import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";

interface UserProps extends React.PropsWithChildren {
  url: string;
}

export const User: React.FunctionComponent<UserProps> = ({
  url,
}): JSX.Element => {
  const router = useRouter();

  return (
    <div className="relative p-1">
      <Link
        href={`${url}`}
        className={`${
          router.pathname === url
            ? "text-light-hover dark:text-dark-hover"
            : "text-light-content dark:text-dark-content"
        }`}
      >
        <AiOutlineUser size={25} />
      </Link>
    </div>
  );
};
