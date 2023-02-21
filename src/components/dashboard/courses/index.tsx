import { ContextActionTypes } from "@/@types/context/context.type";
import { Button } from "@/components/base/button";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineLine,
  AiOutlinePlus,
} from "react-icons/ai";
import AddCourse from "./addcourse";
import CourseItem from "./courseItem";

interface DashboardCoursesProps extends React.PropsWithChildren {}

const DashboardCourses: React.FunctionComponent<
  DashboardCoursesProps
> = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const fetchCourses = useCallback(async () => {
    const response = await httpRequest.getCourses();
    if (response.status === 200) {
      // console.log(response.data.result)
      dispatch({
        type: ContextActionTypes.Get_All_Courses,
        payload: response.data.result,
      });
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const openDialogBox = () => {
    setOpen(!open);
  };

  useEffect(() => {
    openDialogBox();
  }, []);

  return (
    <>
      <div className="w-full p-5">
        <div
          title="Add Course"
          className="flex w-full bg-dark-hover cursor-pointer h-12 rounded-md justify-between items-center p-8 uppercase text-dark-primary font-extrabold"
          onClick={openDialogBox}
        >
          add course
          {open ? <AiOutlinePlus size={30} /> : <AiOutlineLine size={30} />}
        </div>

        {!open && <AddCourse />}
      </div>
      {state.courses.coursesList.length === 0 ? (
        <div>There is not any Courses...</div>
      ) : (
        <table className="border-collapse w-[90%] p-3">
          <thead className="h-16">
            <tr className="uppercase text-sm font-thin">
              <th className="border-x-2 px-8 rounded-lg border-dark-primary bg-dark-secondary">
                image
              </th>
              <th className="border-x-2 px-8 rounded-lg border-dark-primary bg-dark-secondary">
                Name
              </th>
              <th className="border-x-2 px-8 rounded-lg border-dark-primary bg-dark-secondary">
                description
              </th>
              <th className="border-x-2 px-8 rounded-lg border-dark-primary bg-dark-secondary">
                topics
              </th>
              <th className="border-x-2 px-8 rounded-lg border-dark-primary bg-dark-secondary">
                category
              </th>
              <th className="border-x-2 px-8 rounded-lg border-dark-primary bg-dark-secondary">
                tools
              </th>
            </tr>
          </thead>
          <tbody className="">
            {state.courses.coursesList.map((item) => (
              <CourseItem
                key={item._id}
                topics={item.topics}
                _id={item._id}
                CourseName={item.lessonName}
                image={item.image}
                description={item.description}
                category={item.category}
                __v={item.__v}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default DashboardCourses;
