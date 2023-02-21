import { ContextAction, ContextAppState } from '@/@types/context/context.type';
import Lessons from '@/components/courses';
import React, { useReducer } from 'react';
import { createContext } from 'react';
import { CourseReducer } from './course/course.reducer';
const InitialState:ContextAppState = {
    courses:{
        coursesList:[]
    }
}
const AppContext = createContext<{
    state: ContextAppState;
    dispatch: React.Dispatch<ContextAction<any, any>>;
  }>({
    state:InitialState,
    dispatch:()=>null
})
const CombineReducer = ({ courses}: ContextAppState,action: any) => ({
    courses: CourseReducer(courses, action)
  });

interface AppContextProviderProps extends React.PropsWithChildren{}

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({children}):JSX.Element => {
    const [state, dispatch] = useReducer(CombineReducer,InitialState);
    return ( 
    <AppContext.Provider value={{ state ,dispatch }}>
    {children}
    </AppContext.Provider>
    );
}
export {AppContext}
export default AppContextProvider;