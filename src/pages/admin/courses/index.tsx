import AdminLayout from "@/components/layouts/admin";

interface CoursesPageProps extends React.PropsWithChildren {
  title: string;
}

const CoursesPage: React.FunctionComponent<
  CoursesPageProps
> = (): JSX.Element => {
  return (
    <AdminLayout title={"Courses"}>
      <div>courses</div>
    </AdminLayout>
  );
};

export default CoursesPage;
