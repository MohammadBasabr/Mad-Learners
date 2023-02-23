interface LessonCardProps extends React.PropsWithChildren {
  lesson: any;
}

const LessonCard: React.FunctionComponent<LessonCardProps> = ({
  lesson,
}): JSX.Element => {
  return (
    <div className="w-full flex justify-between p-3 rounded-md bg-light-secondary dark:bg-dark-secondary">
      <h2>{lesson.title}</h2>
      <span>$ {lesson.cost}</span>
    </div>
  );
};

export default LessonCard;
