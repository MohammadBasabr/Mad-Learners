export type CreateContext = {
  state: ContextAppState;
  dispatch: React.Dispatch<ContextAction<any, any>>;
};
export enum ContextActionTypes {
  Get_All_Courses = "Get_All_Courses",
  ADD_NEW_Course = "ADD_NEW_Course",
  EDIT_Current_course = "EDIT_Current_course",
  Delete_Current_course = "Delete_Current_course",
  Get_ALL_TEACHERS = "Get_ALL_TEACHERS",
  Get_ALL_EMPLOYEES = "Get_ALL_EMPLOYEES",
  Delete_Current_Employee = "Delete_Current_Employee",
  Add_New_Employee = "Add_New_Employee",
  Login_Success = "Login_Success",
  Edit_Current_Employee = "Edit_Current_Employee",
  Publish_Employee_Toggle = "Publish_Employee_Toggle",
  Get_All_Lessons = "Get_All_Lessons",
  Add_new_Lesson = "Add_new_Lesson",
  Get_ALL_STUDENTS = "Get_ALL_STUDENTS",
  Get_Current_Lesson = "Get_Current_Lesson",
  Delete_Current_Lesson = "Delete_Current_Lesson",
  Edit_Current_Lesson = "Edit_Current_Lesson",
}
export type ContextAction<T, K> = {
  type: T;
  payload?: K;
};
export type ContextAppState = {
  courses: CoursesListState;
  employee: EmployeeListState;
  user: UserAppState;
  lessons: LessonsListState;
};
export type CoursesListState = {
  coursesList: CoursesState[];
};
export type EmployeeListState = {
  employeeList: EmployeeState[];
};

export type UserAppState = {
  id: string;
  token: string;
};
export type LessonsListState = {
  lessonsList: LessonState[];
  currentList: LessonState[];
};

export type CoursesState = {
  topics: string[];
  _id: string;
  lessonName: string;
  image: string;
  description: string;
  category: number;
  __v: number;
};
export type EmployeeState = {
  role: string;
  isActive: boolean;
  _id: string;
  fullName: string;
  email: string;
  password: string;
  birthDate: string;
  phoneNumber: string;
  address: string;
  nationalId: string;
  profile: string;
  registerDate: string;
  courses: [];
  salt: string;
  __v: 0;
  token?: string;
};
export type LessonState = {
  _id: string;
  title: string;
  cost: number;
  endDate: string;
  startDate: string;
  capacity: number;
  teacher: {
    _id: string;
    fullName: string;
    email: string;
    profile: string;
  };
  lesson: {
    _id: string;
    description: string;
    image: string;
    lessonName: string;
    topics: string[];
  };
  students: [];
  __v: 0;
};
