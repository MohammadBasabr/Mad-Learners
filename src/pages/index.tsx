import { Slider } from "@/components/hero";
import { DefaultLayout } from "@/components/layouts/default";
import React from "react";

interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<HomePageProps> = (): JSX.Element => {
  return (
    <DefaultLayout title="MAD LEARNERS">
      <Slider />
    </DefaultLayout>
  );
};

export default HomePage;
