import {
  ContextAction,
  ContextActionTypes,
  UserAppState,
} from "@/@types/context/context.type";

export const UserReducer = (
  state: UserAppState,
  action: ContextAction<ContextActionTypes, any>
) => {
  switch (action.type) {
    case ContextActionTypes.Login_Success:
      state.id = action.payload.id;
      state.token = action.payload.token;
      localStorage.setItem("quera-academy-jwt", JSON.stringify(action.payload));
      return state;
    default:
      return state;
  }
};
