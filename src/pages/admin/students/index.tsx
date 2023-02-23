import DashboardStudents from "@/components/dashboard/students";
import AdminLayout from "@/components/layouts/admin";

interface StudentsPageProps extends React.PropsWithChildren {
  title: string;
}

const StudentsPage: React.FunctionComponent<
  StudentsPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout>
      <DashboardStudents />
    </AdminLayout>
  );
};

export default StudentsPage;
