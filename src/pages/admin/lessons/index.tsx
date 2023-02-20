import AdminLayout from "@/components/layouts/admin";

interface LessonsPageProps extends React.PropsWithChildren {
  title: string;
}

const LessonsPage: React.FunctionComponent<
  LessonsPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout title="Lessosns">
      <div>Lessons</div>
    </AdminLayout>
  );
};

export default LessonsPage;
