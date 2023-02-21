import { ContextActionTypes } from "@/@types/context/context.type";
import { AppContext } from "@/context/store";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { httpRequest } from "@/services/httpRequest";
interface CourseItemProps extends React.PropsWithChildren {
  topics: string[];
  _id: string;
  CourseName: string;
  image: string;
  description: string;
  category: number;
  __v: number;
}

const CourseItem: React.FunctionComponent<CourseItemProps> = ({
  topics,
  _id,
  CourseName,
  image,
  description,
  category,
  __v,
}) => {
  const ref = useRef<boolean>(false);
  const dispatch = useContext(AppContext).dispatch;
  const [edit, setEdit] = useState(false);
  const removeCourse = async (id: string) => {
    //console.log(id)
    try {
      const resp = await axios.delete(`http://localhost:5000/api/lesson/${id}`);
      dispatch({
        type: ContextActionTypes.Delete_Current_course,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editCourseHandler = (id: string) => {
    setEdit(true);
  };
  const [inputImage, setInputImage] = useState<string>(image);
  const [inputLessonName, setInputLessonName] = useState<string>(CourseName);
  const [inputTopics, setInputTopics] = useState<string[]>(topics);
  const [inputDescription, setInputDescription] = useState<string>(description);
  const [inputCategory, setInputCategory] = useState<number>(category);
  const editCourseImageHandler = (e: any) => {
    setInputImage(e.target.value);
  };
  const editCourseLessonNameHandler = (e: any) => {
    setInputLessonName(e.target.value);
  };
  const editCourseDescriptionHandler = (e: any) => {
    setInputDescription(e.target.value);
  };
  const editCourseCategoryHandler = (e: any) => {
    setInputCategory(Number(e.target.value));
  };
  const editCourseTopicsHandler = (e: any) => {
    const str = e.target.value + "";
    if (str.includes(";")) {
      const arr = str.split(";");
      setInputTopics(arr);
    } else {
      const arr = str.split(" ");
      setInputTopics(arr);
      // console.log(typeof(values.topics))
    }
  };
  const updateCourse = async (id: string) => {
    try {
      const editedData = {
        lessonName: inputLessonName,
        topics: inputTopics,
        description: inputDescription,
        image: inputImage,
        category: inputCategory,
      };
      //console.log(editedData)
      const resp = await httpRequest
        .editCourse(id, editedData)
        .then((response) => {
          // console.log('sd')
          //console.log(response.data.result)
          dispatch({
            type: ContextActionTypes.EDIT_Current_course,
            payload: {
              id: id,
              data: response.data.result,
            },
          });
        });
    } catch (error) {
      console.log(error);
    }
    setEdit(false);
  };
  useEffect(() => {
    ref.current && !edit && updateCourse(_id);
    ref.current = true;
  }, [edit]);
  return (
    <>
      <tr className="text-lg text-center border-b border-dark-content h-36">
        <td className="align-middle">
          {edit ? (
            <input
              value={inputImage}
              onChange={(e) => editCourseImageHandler(e)}
              className="text-dark-content bg-dark-secondary rounded-md px-3"
            />
          ) : (
            <img src={image} className="w-28" />
          )}
        </td>
        <td className="">
          <p className="">{CourseName}</p>
        </td>
        <td className="">
          {edit ? (
            <input
              value={inputDescription}
              onChange={(e) => editCourseDescriptionHandler(e)}
              className="text-dark-content bg-dark-secondary rounded-md px-3"
            />
          ) : (
            <p className="">{description}</p>
          )}
        </td>
        <td className="">
          {edit ? (
            <input
              value={inputTopics}
              onChange={(e) => editCourseTopicsHandler(e)}
              className="text-dark-content bg-dark-secondary rounded-md px-3"
            />
          ) : (
            topics.map((item) => item + " ; ")
          )}
        </td>
        <td className="align-middle">
          {edit ? (
            <input
              value={inputCategory}
              onChange={(e) => editCourseCategoryHandler(e)}
              className="text-dark-content bg-dark-secondary rounded-md px-3"
            />
          ) : (
            category
          )}
        </td>
        <td className=" p-3">
          <div className="flex gap-3">
            <AiOutlineDelete
              className="hover:text-dark-hover cursor-pointer"
              onClick={() => removeCourse(_id)}
              size={30}
            />
            {edit ? (
              <AiOutlineCheck
                onClick={() => updateCourse(_id)}
                className="hover:text-dark-hover cursor-pointer"
                size={30}
              />
            ) : (
              <AiOutlineEdit
                onClick={() => editCourseHandler(_id)}
                className="hover:text-dark-hover cursor-pointer"
                size={30}
              />
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default CourseItem;
