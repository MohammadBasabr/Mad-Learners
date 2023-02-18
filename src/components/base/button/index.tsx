import Link from "next/link";

interface ButtonProps extends React.PropsWithChildren {
  title: string;
  to: any;
  onClick?: any;
}
export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  to,
}): JSX.Element => {
  return (
    <Link href={to}>
      <button
        onClick={onClick}
        className="w-full cursor-pointer rounded-md bg-light-hover py-2 uppercase text-light-primary transition-all hover:bg-light-secondary hover:text-light-heading dark:bg-dark-hover dark:text-dark-primary dark:hover:bg-dark-secondary dark:hover:text-dark-heading"
      >
        {title}
      </button>
    </Link>
  );
};
