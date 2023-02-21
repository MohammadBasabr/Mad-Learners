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
    <div className="flex flex-col items-center w-full md:w-[500px] gap-5 bg-light-primary p-6 text-light-content dark:bg-dark-primary dark:text-dark-content">
      <img
        className="w-full rounded-md"
        src={courses[id].image}
        alt={courses[id].lessonName}
      />

      <div className="flex flex-col items-center gap-3 justify-between">
        <h2 className="hidden text-center text-lg font-bold uppercase text-light-heading dark:text-dark-heading md:block">
          {courses[id].lessonName}
        </h2>

        <p className="text-justify block">{courses[id].description}</p>

        <ul className="w-full pl-10">
          {courses[id].topics.map((item: string, index: number) => {
            return (
              <li className="capitalize list-disc" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-1 w-full flex-col gap-1 flex">
        <Button title="enroll" to="#" />
        <Button title="read more" to={`/lesson/${courses[id]._id}`} />
      </div>
    </div>
  );
};
