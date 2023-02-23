import AdminLayout from "@/components/layouts/admin";

interface AdminPageProps extends React.PropsWithChildren {
  title: string;
}

const AdminPage: React.FunctionComponent<AdminPageProps> = (): JSX.Element => {
  
  return <AdminLayout />;
};

export default AdminPage;
