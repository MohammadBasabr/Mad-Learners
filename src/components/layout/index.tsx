import { Nav } from "./header/navbar";
import Header from "./header/header";
import Footer from "./footer";
import Head from "next/head";

interface LayoutProps extends React.PropsWithChildren {
  title: string;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
