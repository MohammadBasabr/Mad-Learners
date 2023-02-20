import { About } from "@/components/about";
import { DefaultLayout } from "@/components/layouts/default";

interface AboutPageProps extends React.PropsWithChildren {
  title: string;
}

const AboutPage: React.FunctionComponent<AboutPageProps> = (): JSX.Element => {
  return (
    <DefaultLayout title={"About"}>
      <About />
    </DefaultLayout>
  );
};

export default AboutPage;
