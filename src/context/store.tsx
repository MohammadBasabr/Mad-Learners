import {
  ContextAction,
  ContextActionTypes,
  ContextAppState,
} from "@/@types/context/context.type";
import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { CourseReducer } from "./course/course.reducer";
import { EmployeeReducer } from "./employee/employee.reducer";
import { LessonReducer } from "./lesson/lesson.reducer";
import { UserReducer } from "./user/user.reducer";
const InitialState: ContextAppState = {
  courses: {
    coursesList: [],
  },
  employee: {
    employeeList: [],
  },
  user: {
    id: "",
    token: "",
  },
  lessons: {
    lessonsList: [],
    currentList: [],
  },
};
const AppContext = createContext<{
  state: ContextAppState;
  dispatch: React.Dispatch<ContextAction<any, any>>;
}>({
  state: InitialState,
  dispatch: () => null,
});
const CombineReducer = (
  { courses, employee, user, lessons }: ContextAppState,
  action: any
) => ({
  courses: CourseReducer(courses, action),
  employee: EmployeeReducer(employee, action),
  user: UserReducer(user, action),
  lessons: LessonReducer(lessons, action),
});

interface AppContextProviderProps extends React.PropsWithChildren {}

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(CombineReducer, InitialState);
  useEffect(() => {
    const authData = localStorage.getItem("quera-academy-jwt");
    authData &&
      dispatch({
        type: ContextActionTypes.Login_Success,
        payload: JSON.parse(authData),
      });
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
export default AppContextProvider;
