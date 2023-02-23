import { Button } from "@/components/base/button";

interface CourseCardProps extends React.PropsWithChildren {
  courses: any[];
  id: number;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  courses,
  id,
}): JSX.Element => {
  return (
    <div className="bg-light-secondary h-full p-3 self-stretch gap-2 flex justify-between flex-col text-light-content dark:text-dark-content dark:bg-dark-secondary">
      <img
        className="w-full"
        src={courses[id].image}
        alt={courses[id].lessonName}
      />
      <div>
        <h2 className="text-light-heading dark:text-dark-heading font-bold text-xl">
          {courses[id].lessonName}
        </h2>
        <p className="truncate w-full">{courses[id].description}</p>
        <ul className="w-full pl-10">
          {courses[id].topics.map((item: string, index: number) => {
            return (
              <li
                className="capitalize list-disc cursor-pointer hover:text-light-hover dark:hover:text-dark-hover"
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex w-full flex-initial gap-1">
        <Button title="more details" to={`/lesson/${courses[id]._id}`} />
        <Button title="enroll now" to="#" />
      </div>
    </div>
  );
};

export default CourseCard;
