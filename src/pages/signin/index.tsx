import { DefaultLayout } from "@/components/layouts/default";
import SignIn from "@/components/signIn";

interface SignInPageProps extends React.PropsWithChildren {
  title: string;
}

const SignInPage: React.FunctionComponent<
  SignInPageProps
> = (): JSX.Element => {
  return (
    <DefaultLayout title="SignInPage">
      <SignIn />
    </DefaultLayout>
  );
};

export default SignInPage;
