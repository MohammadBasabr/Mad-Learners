import { About } from "@/components/about";
import { Layout } from "@/components/layouts/default";

interface AboutPageProps extends React.PropsWithChildren {
  title: string;
}

const AboutPage: React.FunctionComponent<AboutPageProps> = (): JSX.Element => {
  return (
    <Layout title={"About"}>
      <About />
    </Layout>
  );
};

export default AboutPage;
