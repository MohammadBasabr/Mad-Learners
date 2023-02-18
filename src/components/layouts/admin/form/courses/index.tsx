import axios from "axios";
import { useEffect, useState } from "react";

interface CoursesProps extends React.PropsWithChildren {}

const Courses: React.FunctionComponent<CoursesProps> = ({
  children,
}): JSX.Element => {
  return (
    <section className="flex flex-col gap-3 bg-light-primary h-full p-3">
      <select
        name=""
        id=""
        className="w-full bg-light-secondary rounded-md h-10 px-3"
      >
        <option value="">دوره‌ها</option>
      </select>
      <div className="flex gap-1">
        <div className="w-full flex gap-3 justify-center items-center">
          <input
            placeholder="نام دوره"
            className="w-full bg-light-secondary focus:outline-none rounded-md h-10 px-3"
            type="text"
          />
        </div>
        <div className="w-full flex gap-3 justify-center items-center">
          <input
            placeholder="هزینه دوره"
            className="w-full bg-light-secondary focus:outline-none rounded-md h-10 px-3"
            type="text"
          />
        </div>
      </div>
      <select
        name=""
        id=""
        className="w-full bg-light-secondary rounded-md h-10 px-3"
      >
        <option value="">اساتید</option>
      </select>
    </section>
  );
};

export default Courses;
