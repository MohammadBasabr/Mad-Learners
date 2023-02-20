import AdminLayout from "@/components/layouts/admin";

interface LessonsPageProps extends React.PropsWithChildren {
  title: string;
}

const LessonsPage: React.FunctionComponent<
  LessonsPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout>
      <div>Lessons</div>
    </AdminLayout>
  );
};

export default LessonsPage;
