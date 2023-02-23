import { ContextActionTypes } from "@/@types/context/context.type";
import { Button } from "@/components/base/button";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
    setOpen((perv) => !perv);
    //console.log(open)
  };
  useEffect(() => {
    openDialogBox();
  }, []);
  return (
    <>
      <div className="w-80 p-5">
        {" "}
        <Button title="Add Course" onClick={openDialogBox} to="" />
        {!open ? <AddCourse /> : ""}
      </div>
      {state.courses.coursesList.length === 0 ? (
        <div>There is not any Courses...</div>
      ) : (
        <table className="m-5 border-collapse border border-r-dark-content">
          <thead>
            <tr>
              <th className="border border-slate-300 ...">Icon</th>
              <th className="border border-slate-300 ...">CourseName</th>
              <th className="border border-slate-300 ...">description</th>
              <th className="border border-slate-300 ...">topics</th>
              <th className="border border-slate-300 ...">category</th>
              <th className="border border-slate-300 ...">manage</th>
            </tr>
          </thead>
          <tbody>
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
