import { ContextActionTypes } from "@/@types/context/context.type";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import router from "next/router";
import React, { useContext, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import EditLesson from "../editLesson";

interface LessonItemProps extends React.PropsWithChildren {
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
}

const LessonItem: React.FunctionComponent<LessonItemProps> = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState();
  const [inputEndDate, setInputEndDate] = useState();
  const [inputStartDate, setInputStartDate] = useState();
  const [inputCapacity, setInputCapacity] = useState();
  const [inputCost, setInputCost] = useState();
  const [inputTeacher, setInputTeacher] = useState();
  const [inputLesson, setInputLesson] = useState();

  const removeLesson = async (e: any, id: string) => {
    e.stopPropagation();
    try {
      const resp = await httpRequest.removeLesson(id);
      dispatch({
        type: ContextActionTypes.Delete_Current_Lesson,
        payload: id,
      });
    } catch (error) {
      if (!localStorage.getItem("quera-academy-jwt")) {
        router.push("/admin/login");
      }
      console.log(error);
    }
  };
  const updateLesson = async (id: string) => {
    setEdit(true);
  };
  return (
    <>
      {edit ? (
        <EditLesson
          currentid={props._id}
          atitle={props.title}
          ateacher={props.teacher._id}
          alesson={props.lesson._id}
          acost={props.cost}
          acapacity={props.capacity}
          astartdate={props.startDate}
          aenddate={props.endDate}
        />
      ) : (
        ""
      )}
      <div className="flex ">
        <div className="w-1/6">{props.title}</div>
        <div className="w-1/6">{props.teacher.fullName}</div>
        <div className="w-1/6">{props.lesson.lessonName}</div>
        <div className="w-1/6">{props.cost}</div>
        <div className="w-1/6">{props.capacity}</div>
        <div className="w-1/6">{props.startDate.substring(0, 9)}</div>
        <div className="w-1/6">{props.endDate.substring(0, 9)}</div>
        <div className="w-1/6">
          <CiCircleRemove
            className="hover:text-dark-error cursor-pointer"
            onClick={(e) => removeLesson(e, props._id)}
            size={30}
          />
          <AiOutlineEdit
            onClick={() => updateLesson(props._id)}
            className="cursor-pointer hover:text-dark-error"
            size={30}
          />
        </div>
      </div>
    </>
  );
};

export default LessonItem;
