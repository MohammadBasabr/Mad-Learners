import { ContextActionTypes } from "@/@types/context/context.type";
import { Button } from "@/components/base/button";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { isTemplateMiddle } from "typescript";
import AddLesson from "./addLesson";
import LessonItem from "./lessonItem";

interface DashboardLessonsProps extends React.PropsWithChildren {}

const DashboardLessons: React.FunctionComponent<DashboardLessonsProps> = () => {
  const { state, dispatch } = useContext(AppContext);
  const [openDialog, setOpenDialog] = useState(false);
  const fetchLessons = useCallback(async () => {
    const response = await httpRequest.getLessons();
    if (response.status === 200) {
      dispatch({
        type: ContextActionTypes.Get_All_Lessons,
        payload: response.data.result,
      });
    }
  }, []);

  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]);

  const openDialogBox = () => {
    setOpenDialog(!openDialog);
  };
  useEffect(() => {
    openDialogBox();
  }, []);
  return (
    <>
      <Button title="Add Lesson" onClick={openDialogBox} to="" />
      {openDialog ? <AddLesson /> : ""}
      {state.lessons.lessonsList.length === 0 ? (
        <div>There is not any Lessons...</div>
      ) : (
        <div className="m-5 border-collapse border border-r-dark-content">
          <div>
            <div className="flex flex-row">
              <div className="border border-slate-300 w-1/6">
                <h3>Title</h3>
              </div>
              <div className="border border-slate-300 w-1/6">
                <h3>Teacher</h3>
              </div>
              <div className="border border-slate-300 w-1/6">
                <h3>Course</h3>
              </div>
              <div className="border border-slate-300 w-1/6">
                <h3>Cost</h3>
              </div>
              <div className="border border-slate-300 w-1/6">
                <h3>Capacity</h3>
              </div>
              <div className="border border-slate-300 w-1/6">
                <h3>startDate</h3>
              </div>
              <div className="border border-slate-300 w-1/6">
                <h3>endDate</h3>
              </div>

              <div className="border border-slate-300 w-1/6">
                <h3>Manage</h3>
              </div>
            </div>
          </div>
          <div className="border-b-1 border-t-dark-content">
            {state.lessons.lessonsList.map((item) => (
              <LessonItem
                _id={item._id}
                title={item.title}
                teacher={item.teacher}
                lesson={item.lesson}
                students={item.students}
                startDate={item.startDate}
                endDate={item.endDate}
                cost={item.cost}
                capacity={item.capacity}
                __v={item.__v}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLessons;
