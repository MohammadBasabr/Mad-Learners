// import { addToCardHandler } from "../../../utils/shoppingCartFunctions";
import { Button } from "@/components/base/button";

interface MovieCartProps extends React.PropsWithChildren {
  id: number;
  courses: any[];
}

export const HeroMovieCart: React.FunctionComponent<MovieCartProps> = ({
  id,
  courses,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-t-xl bg-light-primary p-6 text-light-content dark:bg-dark-primary dark:text-dark-content md:flex-row md:items-stretch">
      <div>
        <h2 className="text-center text-lg font-bold uppercase text-light-heading dark:text-dark-heading md:hidden">
          {courses[id].lessonName}
        </h2>
        <img
          className="w-52 rounded-md"
          src={courses[id].image}
          alt={courses[id].lessonName}
        />
        <div className="mt-1 hidden w-full flex-col gap-1 md:flex">
          <Button title="add to cart" to="#" />
          <Button title="read more" to={`/movie/${id}`} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between md:w-96">
        <div className="flex w-full flex-col items-center gap-5">
          <h2 className="hidden text-center text-lg font-bold uppercase text-light-heading dark:text-dark-heading md:block">
            {courses[id].lessonName}
          </h2>

          <p className="hidden text-justify md:block">
            {courses[id].description}
          </p>
        </div>
        <div className=" w-full text-left">
          <span className="mr-2 font-bold capitalize text-light-hover dark:text-dark-hover">
            topcis:
          </span>
          {courses[id].topics.join(", ")}
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="mt-1 flex  w-full flex-col gap-1 md:hidden">
            <Button title="add to cart" to="#" />
            <Button title="read more" to={`/movie/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
