import { DefaultLayout } from "@/components/layouts/default";
import SignUp from "@/components/signUp";

interface SignUpPageProps extends React.PropsWithChildren {
  title: string;
}

const SignUpPage: React.FunctionComponent<
  SignUpPageProps
> = (): JSX.Element => {
  return (
    <DefaultLayout title="SignUpPage">
      <SignUp />
    </DefaultLayout>
  );
};

export default SignUpPage;
