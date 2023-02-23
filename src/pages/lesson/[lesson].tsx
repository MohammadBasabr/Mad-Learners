import { DefaultLayout } from "@/components/layouts/default";
import LessonDetail from "@/components/lessonDetail";

interface LessonPageProps extends React.PropsWithChildren {
  title: string;
  resultData: any;
}

const LessonPage: React.FunctionComponent<LessonPageProps> = ({
  resultData,
}): JSX.Element => {
  console.log(resultData.result);
  return (
    <DefaultLayout title={"Lesson"}>
      <LessonDetail data={resultData.result} />
    </DefaultLayout>
  );
};

export default LessonPage;

export async function getServerSideProps(context: any) {
  const result = await fetch(
    `http://localhost:5000/api/lesson/${context.params.lesson}`
  );
  const resultData = await result.json();
  return {
    props: {
      resultData,
    },
  };
}
