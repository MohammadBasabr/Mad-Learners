import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import CourseCardSkeleton from "./courseCardSkeleton";
import { Pagination } from "./pagination";

interface LessonsProps extends React.PropsWithChildren {}

const Lessons: React.FunctionComponent<LessonsProps> = (): JSX.Element => {
  const [lessons, setLessons] = useState([]);
  const [currentPage, setCurrent] = useState(1);
  let pageSize = 8;
  const [totalLessons, setTotalLessons] = useState();

  const emptyArray = [1, 1, 1, 1, 1, 1, 1, 1];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/lesson/list?pagenumber=${currentPage}&pagesize=${pageSize}`
      )
      .then((response) => {
        setLessons(response.data.result.lessons);
        setTotalLessons(response.data.result.count);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  const handleCurrentPage = (page: number) => {
    setCurrent(page);
  };
  console.log(lessons);
  return (
    <section>
      <div className="md:min-h-[calc(100vh-176px)] relative grid w-full grid-cols-1 dark:bg-dark-primary bg-light-primary px-5 pt-5 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lessons[0]
          ? lessons.map((lesson: any, index: number) => {
              return (
                <div key={index}>
                  <CourseCard courses={lessons} id={index} />
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
      </div>
      <div className="flex justify-center py-3 items-center w-full bg-light-primary dark:bg-dark-primary">
        <Pagination
          totalLessons={totalLessons}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handleCurrentPage}
        />
      </div>
    </section>
  );
};

export default Lessons;
