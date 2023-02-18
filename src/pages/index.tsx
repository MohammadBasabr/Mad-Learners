import { Slider } from "@/components/hero";
import { Layout } from "@/components/layouts/default";
import React from "react";
interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<HomePageProps> = (): JSX.Element => {
  return (
    <Layout title="MAD LEARNERS">
      <Slider />
    </Layout>
  );
};

export default HomePage;
