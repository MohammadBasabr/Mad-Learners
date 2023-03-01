import ForgetPassword from "@/components/forgetPassword";
import { DefaultLayout } from "@/components/layouts/default";

interface ForgetPasswordPageProps extends React.PropsWithChildren {
  title: string;
}

const ForgetPasswordPage: React.FunctionComponent<
  ForgetPasswordPageProps
> = (): JSX.Element => {
  return (
    <DefaultLayout title="forgetPasswordPage">
      <ForgetPassword />
    </DefaultLayout>
  );
};

export default ForgetPasswordPage;
