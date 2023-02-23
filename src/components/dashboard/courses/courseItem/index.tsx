import { ContextActionTypes } from "@/@types/context/context.type";
import { AppContext } from "@/context/store";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai";
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
      const resp = await httpRequest
        .editCourse(id, editedData)
        .then((response) => {
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
      <tr
        onClick={() => editCourseHandler(_id)}
        className="text-lg text-center"
      >
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputImage}
              onChange={(e) => editCourseImageHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            <img src={image} width={100} height={100} />
          )}
        </td>
        <td className="border border-r-dark-content">{CourseName}</td>
        <td className="border border-r-dark-content break-normal">
          {edit ? (
            <input
              value={inputDescription}
              onChange={(e) => editCourseDescriptionHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            description
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputTopics}
              onChange={(e) => editCourseTopicsHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            topics.map((item) => item + " ; ")
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputCategory}
              onChange={(e) => editCourseCategoryHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            category
          )}
        </td>
        <td className="border border-r-dark-content">
          <CiCircleRemove
            className="hover:text-dark-error cursor-pointer"
            onClick={() => removeCourse(_id)}
            size={30}
          />
          <AiOutlineEdit
            onClick={() => updateCourse(_id)}
            className="cursor-pointer hover:text-dark-error"
            size={30}
          />
        </td>
      </tr>
    </>
  );
};

export default CourseItem;
