import Courses from "@/components/courses";
import { DefaultLayout } from "@/components/layouts/default";

interface LessonsPageProps extends React.PropsWithChildren {
  title: string;
}

const LessonsPage: React.FunctionComponent<
  LessonsPageProps
> = (): JSX.Element => {
  return (
    <DefaultLayout title="LessonsPage">
      <Courses />
    </DefaultLayout>
  );
};

export default LessonsPage;
