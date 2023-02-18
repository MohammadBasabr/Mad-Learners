import Courses from "@/components/courses";
import { Layout } from "@/components/layouts/default";

interface LessonsPageProps extends React.PropsWithChildren {
  title: string;
}

const LessonsPage: React.FunctionComponent<
  LessonsPageProps
> = (): JSX.Element => {
  return (
    <Layout title="LessonsPage">
      <Courses />
    </Layout>
  );
};

export default LessonsPage;
