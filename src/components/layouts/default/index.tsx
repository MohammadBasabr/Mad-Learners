import Footer from "./footer";
import Head from "next/head";
import Header from "./header";
import { Nav } from "./navbar";

interface DefaultLayoutProps extends React.PropsWithChildren {
  title: string;
}

export const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
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
