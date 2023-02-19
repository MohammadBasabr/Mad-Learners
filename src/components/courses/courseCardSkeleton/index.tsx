import { Button } from "@/components/base/button";

interface CourseCardSkeletonProps extends React.PropsWithChildren {}

const CourseCardSkeleton: React.FunctionComponent<
  CourseCardSkeletonProps
> = ({}): JSX.Element => {
  return (
    <div className="bg-light-secondary p-3 h-full dark:bg-dark-secondary">
      <div className="animate-pulse flex flex-col gap-2 justify-between w-full">
        <div className="w-full h-56 bg-light-primary dark:bg-dark-primary" />
        <div className="flex flex-col gap-2">
          <div className="dark:bg-dark-primary bg-light-primary w-1/2 h-8"></div>
          <div className="flex flex-col gap-2 pl-6">
            <div className="w-full h-8 bg-light-primary dark:bg-dark-primary"></div>
            <div className="w-full h-8 bg-light-primary dark:bg-dark-primary"></div>
            <div className="w-full h-8 bg-light-primary dark:bg-dark-primary"></div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-full h-10 bg-light-primary dark:bg-dark-primary rounded-md"></div>
          <div className="w-full h-10 bg-light-primary dark:bg-dark-primary rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
