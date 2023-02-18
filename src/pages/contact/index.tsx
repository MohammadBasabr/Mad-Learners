import Contact from "@/components/contact";
import { Layout } from "@/components/layouts/default";

interface ContactPageProps extends React.PropsWithChildren {
  title: string;
}

const ContactPage: React.FunctionComponent<
  ContactPageProps
> = (): JSX.Element => {
  return (
    <Layout title={"Contact"}>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
