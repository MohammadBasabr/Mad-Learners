import DashboardLessons from "@/components/dashboard/lessons";
import AdminLayout from "@/components/layouts/admin";

interface LessonsPageProps extends React.PropsWithChildren {
  title: string;
}

const LessonsPage: React.FunctionComponent<
  LessonsPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout>
      <DashboardLessons />
    </AdminLayout>
  );
};

export default LessonsPage;
