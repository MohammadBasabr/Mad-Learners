import { ContextAction, ContextActionTypes, CoursesListState } from "@/@types/context/context.type";

export const CourseReducer = (state:CoursesListState,action:ContextAction<ContextActionTypes,any>)=>{
    switch (action.type){
        case ContextActionTypes.Get_All_Courses:
            state.coursesList = action.payload
        return state;
        case ContextActionTypes.ADD_NEW_Course:
            //console.log(action.payload)
            state.coursesList.push(action.payload)
            return state;
        case ContextActionTypes.Delete_Current_course:
            //console.log(action.payload)
            state.coursesList = state.coursesList.filter(
                (n) => n._id !== action?.payload
              );
            return state;
        default:
            return state;
    }
}