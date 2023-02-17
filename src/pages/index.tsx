import { Layout } from "@/components/layout";
import React from "react";
interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<HomePageProps> = (): JSX.Element => {
  return (
    <Layout title="خانه">
      <div className="text-dark-primary text-6xl">شسیش</div>
    </Layout>
  );
};

export default HomePage;
