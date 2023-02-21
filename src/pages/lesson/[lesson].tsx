import { DefaultLayout } from "@/components/layouts/default";
import LessonDetail from "@/components/lessonDetail";
import { useRouter } from "next/router";

interface LessonPageProps extends React.PropsWithChildren {
  title: string;
}

const LessonPage: React.FunctionComponent<
  LessonPageProps
> = (): JSX.Element => {
  const router = useRouter();

  return (
    <DefaultLayout title={"Lesson"}>
      <LessonDetail id={router.query.lesson} />
    </DefaultLayout>
  );
};

export default LessonPage;
