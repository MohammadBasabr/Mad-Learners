import AdminLayout from "@/components/layouts/admin";

interface TeachersPageProps extends React.PropsWithChildren {
  title: string;
}

const TeachersPage: React.FunctionComponent<
  TeachersPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout title="Teachers">
      <div>Teachers</div>
    </AdminLayout>
  );
};

export default TeachersPage;
