import Contact from "@/components/contact";
import { DefaultLayout } from "@/components/layouts/default";

interface ContactPageProps extends React.PropsWithChildren {
  title: string;
}

const ContactPage: React.FunctionComponent<
  ContactPageProps
> = (): JSX.Element => {
  return (
    <DefaultLayout title={"Contact"}>
      <Contact />
    </DefaultLayout>
  );
};

export default ContactPage;
