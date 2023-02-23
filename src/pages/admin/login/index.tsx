import DashboardSignIn from "@/components/dashboard/login";
import { DefaultLayout } from "@/components/layouts/default";


interface LoginProps extends React.PropsWithChildren {
  title: string;
}

const Login: React.FunctionComponent<
  LoginProps
> = (): JSX.Element => {
  return (
    <DefaultLayout title={"Login"}>
      <DashboardSignIn />
      </DefaultLayout>
  );
};

export default Login;
