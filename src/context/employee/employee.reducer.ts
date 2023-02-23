import {
  ContextAction,
  ContextActionTypes,
  CoursesListState,
  EmployeeListState,
} from "@/@types/context/context.type";

export const EmployeeReducer = (
  state: EmployeeListState,
  action: ContextAction<ContextActionTypes, any>
) => {
  switch (action.type) {
    case ContextActionTypes.Get_ALL_EMPLOYEES:
      state.employeeList = action.payload;
      return state;
    case ContextActionTypes.Get_ALL_TEACHERS:
      state.employeeList = action.payload;
      return state;
    case ContextActionTypes.Delete_Current_Employee:
      state.employeeList = state.employeeList.filter(
        (n) => n._id !== action?.payload
      );
      return state;
    case ContextActionTypes.Add_New_Employee:
      state.employeeList.push(action.payload);
      return state;
    case ContextActionTypes.Edit_Current_Employee:
      let newData = state.employeeList.filter(
        (n) => n._id == action?.payload.id
      )[0];
      newData.fullName = action.payload.data.fullName;
      newData.email = action.payload.data.email;
      newData.phoneNumber = action.payload.data.phoneNumber;
      newData.nationalId = action.payload.data.nationalId;
      newData.birthDate = action.payload.data.birthDate;
      newData.address = action.payload.data.address;
      newData.profile = action.payload.data.profile;
      state.employeeList.filter((n) => n._id == action?.payload.id)[0] =
        newData;
      return state;
    case ContextActionTypes.Publish_Employee_Toggle:
      let currentEmployee = state.employeeList.filter(
        (n) => n._id == action?.payload.id
      )[0];
      currentEmployee.isActive = action?.payload.status;
      state.employeeList.filter((n) => n._id == action?.payload.id)[0] =
        currentEmployee;
      return state;
    case ContextActionTypes.Get_ALL_STUDENTS:
      state.employeeList = action.payload;
      return state;
    default:
      return state;
  }
};
