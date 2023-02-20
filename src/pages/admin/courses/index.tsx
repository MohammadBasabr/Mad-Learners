import DashboardCourses from "@/components/dashboard/courses";
import AdminLayout from "@/components/layouts/admin";

interface CoursesPageProps extends React.PropsWithChildren {
  title: string;
}

const CoursesPage: React.FunctionComponent<
  CoursesPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout>
      <DashboardCourses />
    </AdminLayout>
  );
};

export default CoursesPage;
