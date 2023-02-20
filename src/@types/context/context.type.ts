export type CreateContext = {
    state:ContextAppState,
    dispatch:React.Dispatch<ContextAction<any,any>>
}
export type ContextAppState = {
    courses: CoursesListState;
};
export type CoursesListState = {
    coursesList: CoursesState[];
};
export enum ContextActionTypes{
    Get_All_Courses = "Get_All_Courses"
}
export type ContextAction<T, K> = {
    type: T;
    payload?: K;
};
export type CoursesState = {
    title: string;
    cost: number;
    endDate: string;
    startDate: string;
    capacity: number;
    teacher:string;
    lesson:string;
};
  