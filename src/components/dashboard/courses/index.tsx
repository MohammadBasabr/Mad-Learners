import { ContextActionTypes } from "@/@types/context/context.type";
import { AppContext } from "@/context/store";
import axios from "axios";
import { useCallback, useContext, useEffect } from "react";

interface DashboardCoursesProps extends React.PropsWithChildren {}

const DashboardCourses: React.FunctionComponent<DashboardCoursesProps> = (): JSX.Element => {
  const {state,dispatch} = useContext(AppContext)
  //axios
 // .get("http://localhost:5000/api/lesson")
 // .then((response) => setLessons(response.data.result))
 // .catch((err) => console.log(err));
    const fetchCourses = useCallback(async () => {
        const response = await axios.get("http://localhost:5000/api/lesson");
        if (response.status === 200) {
          console.log(response.data.result)
          dispatch({
            type: ContextActionTypes.Get_All_Courses,
            payload:response.data
          })
        }
      }, []);
    
      useEffect(() => {
        fetchCourses();
      }, [fetchCourses]);



  return <div>Dashboard Courses</div>;
};

export default DashboardCourses;
