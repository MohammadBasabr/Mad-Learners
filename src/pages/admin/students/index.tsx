import AdminLayout from "@/components/layouts/admin";

interface StudentsPageProps extends React.PropsWithChildren {
  title: string;
}

const StudentsPage: React.FunctionComponent<
  StudentsPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout>
      <div>Students</div>
    </AdminLayout>
  );
};

export default StudentsPage;
