import {
  ContextAction,
  ContextActionTypes,
  LessonsListState,
} from "@/@types/context/context.type";

export const LessonReducer = (
  state: LessonsListState,
  action: ContextAction<ContextActionTypes, any>
) => {
  switch (action.type) {
    case ContextActionTypes.Get_All_Lessons:
      state.lessonsList = action.payload;
      return state;
    case ContextActionTypes.Add_new_Lesson:
      state.lessonsList.push(action.payload);
      return state;
    case ContextActionTypes.Delete_Current_Lesson:
      state.lessonsList = state.lessonsList.filter(
        (n) => n._id !== action?.payload
      );
      return state;
    case ContextActionTypes.Edit_Current_Lesson:
      let newData = state.lessonsList.filter(
        (n) => n._id == action?.payload.id
      )[0];
      newData.title = action.payload.data.title;
      newData.cost = action.payload.data.cost;
      newData.capacity = action.payload.data.capacity;
      newData.startDate = action.payload.data.startDate;
      newData.endDate = action.payload.data.endDate;
      newData.teacher = action.payload.data.teacher.fullName;
      newData.lesson = action.payload.data.lesson.lessonName;
      state.lessonsList.filter((n) => n._id == action?.payload.id)[0] = newData;
      return state;
    case ContextActionTypes.Get_Current_Lesson:
      state.currentList = action.payload;
      return state;
    default:
      return state;
  }
};
