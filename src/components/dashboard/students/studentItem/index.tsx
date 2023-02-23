import { AppContext } from "@/context/store";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai";
import { httpRequest } from "@/services/httpRequest";
import { ContextActionTypes } from "@/@types/context/context.type";
import { MdPublishedWithChanges } from "react-icons/md";
import { MdUnpublished } from "react-icons/md";

import router from "next/router";
interface StudentItemProps extends React.PropsWithChildren {
  isActive: boolean;
  _id: string;
  fullName: string;
  email: string;
  password: string;
  birthDate: string;
  phoneNumber: string;
  address: string;
  nationalId: string;
  profile: string;
  registerDate: string;
  courses: Array<string>;
  salt: string;
  __v: 0;
}

const StudentItem: React.FunctionComponent<StudentItemProps> = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [courseName, setCourseName] = useState("");
  const ref = useRef<boolean>(false);
  const [edit, setEdit] = useState(false);
  const [inputFullName, setInputFullName] = useState(props.fullName);
  const [inputEmail, setInputEmail] = useState(props.email);
  const [inputPhoneNumber, setInputPhoneNumber] = useState(props.phoneNumber);
  const [inputNationalId, setInputNationalId] = useState(props.nationalId);
  const [inputCourseName, setInputCourseName] = useState(courseName);
  const [inputBirthDate, setInputBirthDate] = useState(props.birthDate);
  const [inputAddress, setInputAddress] = useState(props.address);
  const [publish, setPublish] = useState(props.isActive);
  const [inputProfile, setInputProfile] = useState(props.profile);
  const editProfileHandler = (e: any) => {
    setInputProfile(e.target.value);
  };
  const editFullNameHandler = (e: any) => {
    setInputFullName(e.target.value);
  };
  const editEmailHandler = (e: any) => {
    setInputEmail(e.target.value);
  };
  const editPhoneNumberHandler = (e: any) => {
    setInputPhoneNumber(e.target.value);
  };
  const editNationalIdHandler = (e: any) => {
    setInputNationalId(e.target.value);
  };
  const editCourseNameHandler = (e: any) => {
    setInputCourseName(e.target.value);
  };
  const editBirthDateHandler = (e: any) => {
    setInputBirthDate(e.target.value);
  };
  const editAddressHandler = (e: any) => {
    setInputAddress(e.target.value);
  };
  const editStudentHandler = (id: string) => {
    setEdit(true);
  };

  const publishHandler = async (e: any, id: string) => {
    e.stopPropagation();
    setPublish(true);
    try {
      const resp = await httpRequest.activeStudent(id);
      dispatch({
        type: ContextActionTypes.Publish_Employee_Toggle,
        payload: {
          id: id,
          status: publish,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unPublishHandler = async (e: any, id: string) => {
    e.stopPropagation();
    setPublish(false);
    try {
      const resp = await httpRequest.deActiveStudent(id);
      dispatch({
        type: ContextActionTypes.Publish_Employee_Toggle,
        payload: {
          id: id,
          status: publish,
        },
      });
    } catch (error) {
      if (!localStorage.getItem("quera-academy-jwt")) {
        router.push("/admin/login");
      }
      console.log(error);
    }
  };

  const updateStudent = async (id: string) => {
    try {
      const editedData = {
        fullName: inputFullName,
        phoneNumber: inputPhoneNumber,
        birthDate: inputBirthDate,
        email: inputEmail,
        nationalId: inputNationalId,
        profile: inputProfile,
        address: inputAddress,
      };
      const resp = await httpRequest
        .editStudent(props._id, editedData)
        .then((response) => {
          dispatch({
            type: ContextActionTypes.Edit_Current_Employee,
            payload: {
              id: props._id,
              data: response.data.result,
            },
          });
        });
    } catch (error) {
      console.log(error);
    }
    setEdit(false);
  };

  const removeStudent = async (e: any, id: string) => {
    e.stopPropagation();
    try {
      const resp = await httpRequest.removeStudent(id);
      dispatch({
        type: ContextActionTypes.Delete_Current_Employee,
        payload: id,
      });
    } catch (error) {
      if (!localStorage.getItem("quera-academy-jwt")) {
        router.push("/admin/login");
      }
      console.log(error);
    }
  };

  const fetchCourses = useCallback(async () => {
    const response = await httpRequest.getCourses();
    if (response.status === 200) {
      dispatch({
        type: ContextActionTypes.Get_All_Courses,
        payload: response.data.result,
      });
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    ref.current && !edit && updateStudent(props._id);
    ref.current = true;
  }, [edit]);

  return (
    <>
      <tr className="text-center" onClick={() => editStudentHandler(props._id)}>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputProfile}
              onChange={(e) => editProfileHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            <img
              src={props.profile}
              alt={props.fullName}
              className="p-2 rounded-full"
              width="100"
              height="100"
            />
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputFullName}
              onChange={(e) => editFullNameHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.fullName
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputEmail}
              onChange={(e) => editEmailHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.email
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputPhoneNumber}
              onChange={(e) => editPhoneNumberHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.phoneNumber
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputNationalId}
              onChange={(e) => editNationalIdHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.nationalId
          )}
        </td>
        <td className="border border-r-dark-content">{courseName}</td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputBirthDate}
              onChange={(e) => editBirthDateHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.birthDate
          )}
        </td>
        <td className="border border-r-dark-content">{props.address}</td>
        <td className="border border-r-dark-content">
          <CiCircleRemove
            className="hover:text-dark-error cursor-pointer"
            onClick={(e) => removeStudent(e, props._id)}
            size={30}
          />
          <AiOutlineEdit
            onClick={() => updateStudent(props._id)}
            className="cursor-pointer hover:text-dark-error"
            size={30}
          />
          {props.isActive === true ? (
            <MdPublishedWithChanges
              className="cursor-pointer p-2 hover:text-dark-error"
              size={40}
              onClick={(e) => unPublishHandler(e, props._id)}
            />
          ) : (
            <MdUnpublished
              size={40}
              className="cursor-pointer hover:text-dark-error"
              onClick={(e) => publishHandler(e, props._id)}
            />
          )}
        </td>
      </tr>
    </>
  );
};

export default StudentItem;
