import { Layout } from "@/components/layout";

interface MoviesProps extends React.PropsWithChildren {
  title: string;
}

const Movies: React.FunctionComponent<MoviesProps> = (): JSX.Element => {
  return <Layout title="Movies">درس</Layout>;
};

export default Movies;
