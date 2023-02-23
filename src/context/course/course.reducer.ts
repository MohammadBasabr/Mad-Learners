import {
  ContextAction,
  ContextActionTypes,
  CoursesListState,
} from "@/@types/context/context.type";

export const CourseReducer = (
  state: CoursesListState,
  action: ContextAction<ContextActionTypes, any>
) => {
  switch (action.type) {
    case ContextActionTypes.Get_All_Courses:
      state.coursesList = action.payload;
      return state;
    case ContextActionTypes.ADD_NEW_Course:
      state.coursesList.push(action.payload);
      return state;
    case ContextActionTypes.Delete_Current_course:
      state.coursesList = state.coursesList.filter(
        (n) => n._id !== action?.payload
      );
      return state;
    case ContextActionTypes.EDIT_Current_course:
      let newData = state.coursesList.filter(
        (n) => n._id == action?.payload.id
      )[0];
      newData.category = action.payload.data.category;
      newData.description = action.payload.data.description;
      newData.image = action.payload.data.image;
      newData.lessonName = action.payload.data.lessonName;
      newData.topics = action.payload.data.topics;
      state.coursesList.filter((n) => n._id == action?.payload.id)[0] = newData;
      return state;
    default:
      return state;
  }
};
