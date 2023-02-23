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
import { MdAssignment } from "react-icons/md";
import router from "next/router";
interface TeacherItemProps extends React.PropsWithChildren {
  isactive: boolean;
  _id: string;
  fullname: string;
  email: string;
  password: string;
  birthdate: string;
  phonenumber: string;
  address: string;
  nationalid: string;
  profile: string;
  registerdate: string;
  courses: Array<string>;
  salt: string;
  __v: 0;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [courseName, setCourseName] = useState("");
  const ref = useRef<boolean>(false);
  const [edit, setEdit] = useState(false);
  const [inputFullName, setInputFullName] = useState(props.fullname);
  const [inputEmail, setInputEmail] = useState(props.email);
  const [inputPhoneNumber, setInputPhoneNumber] = useState(props.phonenumber);
  const [inputNationalId, setInputNationalId] = useState(props.nationalid);
  const [inputCourseName, setInputCourseName] = useState(courseName);
  const [inputBirthDate, setInputBirthDate] = useState(props.birthdate);
  const [inputAddress, setInputAddress] = useState(props.address);
  const [publish, setPublish] = useState(props.isactive);

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
  const editTeacherHandler = (id: string) => {
    setEdit(true);
  };

  const publishHandler = async (e: any, id: string) => {
    e.stopPropagation();
    setPublish(true);
    try {
      const resp = await httpRequest.activeEmployee(id);
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
      const resp = await httpRequest.deActiveEmployee(id);
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

  const updateTeacher = async (id: string) => {
    try {
      const editedData = {
        fullName: inputFullName,
        phoneNumber: inputPhoneNumber,
        birthDate: inputBirthDate,
        email: inputEmail,
        nationalId: inputNationalId,
        address: inputAddress,
      };
      const resp = await httpRequest
        .editEmployee(props._id, editedData)
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

  const removeTeacher = async (id: string) => {
    try {
      const resp = await httpRequest.removeEmployee(id);
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
    ref.current && !edit && updateTeacher(props._id);
    ref.current = true;
  }, [edit]);

  return (
    <>
      <tr className="text-center" onClick={() => editTeacherHandler(props._id)}>
        <td className="border border-r-dark-content">
          <img
            src={props.profile}
            alt={props.fullname}
            className="p-2 rounded-full"
            width="100"
            height="100"
          />
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputFullName}
              onChange={(e) => editFullNameHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.fullname
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
            props.phonenumber
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
            props.nationalid
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
            props.birthdate
          )}
        </td>
        <td className="border border-r-dark-content">
          {edit ? (
            <input
              value={inputAddress}
              onChange={(e) => editAddressHandler(e)}
              className="text-dark-secondary"
            />
          ) : (
            props.address
          )}
        </td>
        <td className="border border-r-dark-content">
          <CiCircleRemove
            className="hover:text-dark-error cursor-pointer"
            onClick={() => removeTeacher(props._id)}
            size={30}
          />
          <AiOutlineEdit
            onClick={() => updateTeacher(props._id)}
            className="cursor-pointer hover:text-dark-error"
            size={30}
          />
          {props.isactive === true ? (
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

export default TeacherItem;
