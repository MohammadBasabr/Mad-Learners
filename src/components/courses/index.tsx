import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import CourseCardSkeleton from "./courseCardSkeleton";

interface LessonsProps extends React.PropsWithChildren {}

const Lessons: React.FunctionComponent<LessonsProps> = (): JSX.Element => {
  const [lessonsData, setLessons] = useState([]);
  const emptyArray = [1, 1, 1, 1, 1, 1, 1, 1];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/lesson")
      .then((response) => setLessons(response.data.result));
  }, []);

  return (
    <section className="relative grid w-full grid-cols-1 dark:bg-dark-primary bg-light-primary px-5 pt-5 pb-12 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {lessonsData
        ? lessonsData.map((lesson: any, index) => {
            return (
              <div key={index}>
                <CourseCard courses={lessonsData} id={index} />;
              </div>
            );
          })
        : emptyArray.map((_, i) => {
            return (
              <div key={i}>
                <CourseCardSkeleton />
              </div>
            );
          })}
      <div className="bg-dark-error h-16 w-full absolute bottom-0"></div>
    </section>
  );
};

export default Lessons;
