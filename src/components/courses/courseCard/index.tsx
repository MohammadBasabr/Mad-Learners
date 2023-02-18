import { Button } from "@/components/base/button";

interface CourseCardProps extends React.PropsWithChildren {
  img: string;
  title: string;
  description: string;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  img,
  title,
  description,
}): JSX.Element => {
  return (
    <div className="bg-light-secondary p-3 gap-2 flex justify-between flex-col text-light-content dark:text-dark-content dark:bg-dark-secondary">
      <img className="w-full" src={img} alt={title} />
      <div>
        <h2 className="text-light-heading dark:text-dark-heading font-bold text-xl">
          {title}
        </h2>
        <p className="text-ellipsis w-full overflow-hidden">{description}</p>
      </div>
      <Button title="more details" to="#" />
    </div>
  );
};

export default CourseCard;
