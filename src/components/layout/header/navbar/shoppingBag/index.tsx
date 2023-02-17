import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineShopping } from "react-icons/ai";
import { Badge } from "../badge";

interface ShoppingBagProps extends React.PropsWithChildren {
  url?: string;
}

export const ShoppingBag: React.FunctionComponent<ShoppingBagProps> = ({
  url,
}): JSX.Element => {
  const router = useRouter();

  return (
    <div className="relative cursor-pointer p-1">
      <Link
        href={`${url}`}
        className={`${
          router.pathname === url
            ? "text-light-hover dark:text-dark-hover"
            : "text-light-content dark:text-dark-content"
        }`}
      >
        <AiOutlineShopping size={25} />
      </Link>
      <Badge value="2" />
    </div>
  );
};
