import Footer from "./footer";
import Head from "next/head";
import Header from "./header";
import { Nav } from "./navbar";

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
