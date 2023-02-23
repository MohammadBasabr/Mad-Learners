import DashboardTeacher from "@/components/dashboard/teachers";
import AdminLayout from "@/components/layouts/admin";

interface TeachersPageProps extends React.PropsWithChildren {
  title: string;
}

const TeachersPage: React.FunctionComponent<
  TeachersPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout>
      <DashboardTeacher />
    </AdminLayout>
  );
};

export default TeachersPage;
