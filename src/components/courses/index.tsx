import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./courseCard";

interface LessonsProps extends React.PropsWithChildren {}

const Lessons: React.FunctionComponent<LessonsProps> = (): JSX.Element => {
  const [lessonsData, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/lesson")
      .then((response) => setLessons(response.data.result));
  }, []);

  return (
    <section className="relative grid w-full grid-cols-1 dark:bg-dark-primary bg-light-primary px-5 pt-5 pb-12 gap-3 md:grid-cols-2 lg:grid-cols-4 md:min-h-[calc(100vh-96px)]">
      {lessonsData ? (
        lessonsData.map((lesson: any, index) => {
          return (
            <div key={index}>
              <CourseCard
                img={lesson.image}
                title={lesson.lessonName}
                description={lesson.description}
              />
              ;
            </div>
          );
        })
      ) : (
        <span>loading ...</span>
      )}
      <div className="bg-dark-error h-16 w-full absolute bottom-0"></div>
    </section>
  );
};

export default Lessons;
