import Link from "next/link";
import { Button } from "../base/button";
import LessonCard from "./lessonCard";

interface LessonDetailProps extends React.PropsWithChildren {
  data: any;
}

const LessonDetail: React.FunctionComponent<LessonDetailProps> = ({
  data,
}): JSX.Element => {
  let totalCost = 0;

  data.courses.map((course: any) => {
    totalCost += course.cost;
  });

  return (
    <section className="flex w-full items-center flex-col scroll-smooth justify-center text-light-content dark:text-dark-content bg-light-primary dark:bg-dark-primary md:flex-row md:h-[calc(100vh-176px)]">
      <div className="p-3 md:p-0 h-[calc(100vh-48px)] md:h-full w-full md:w-[400px]">
        <div className="bg-light-secondary dark:bg-dark-secondary flex flex-col justify-between h-full w-full">
          <img src={data.image} alt={data.lessonName} className="w-full" />
          <div className="w-full p-3 gap-4 flex flex-col md:text-lg">
            <h2 className="text-light-heading dark:text-dark-heading uppercase text-xl">
              {data.lessonName}
            </h2>
            <div>
              <span className="text-light-hover dark:text-dark-hover">
                Top topics:
              </span>
              <ul className="pl-10">
                {data.topics?.map((topic: string, index: number) => {
                  return (
                    <li className="list-disc" key={index}>
                      {topic}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p>
              <span className="text-light-hover dark:text-dark-hover">
                Description:{" "}
              </span>
              {data.description}
            </p>
            <p>
              <span className="text-light-hover dark:text-dark-hover">
                Total Cost:{" "}
              </span>
              $ {totalCost}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center p-3 gap-2">
            <Button title={"enroll now"} to="#" />
            <Link
              scroll={false}
              className="text-light-hover md:hidden dark:text-dark-hover uppercase"
              href={"#courses"}
            >
              see courses
            </Link>
          </div>
        </div>
      </div>
      <div
        id="courses"
        className="md:w-[calc(100%-400px)] p-3 w-full h-[calc(100vh-96px)] md:h-full"
      >
        <div className="w-full h-full gap-2 flex flex-col">
          {data.courses.length
            ? data.courses.map((course: any) => {
                return (
                  <div key={course._id}>
                    <LessonCard lesson={course} />
                  </div>
                );
              })
            : "no lesson is available"}
        </div>
      </div>
    </section>
  );
};

export default LessonDetail;
