export type CreateContext = {
    state:ContextAppState,
    dispatch:React.Dispatch<ContextAction<any,any>>
}
export enum ContextActionTypes{
    Get_All_Courses = "Get_All_Courses",
    ADD_NEW_Course = "ADD_NEW_Course",
    Delete_Current_course = "Delete_Current_course"
}
export type ContextAction<T, K> = {
    type: T;
    payload?: K;
};
export type ContextAppState = {
    courses: CoursesListState;
};
export type CoursesListState = {
    coursesList: CoursesState[];
};


export type CoursesState = {
    topics: string[];
    _id: string;
    lessonName: string;
    image: string;
    description: string;
    category:number;
    __v:number
};

  