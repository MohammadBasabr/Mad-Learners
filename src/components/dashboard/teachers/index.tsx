import { ContextActionTypes } from "@/@types/context/context.type";
import { Button } from "@/components/base/button";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import React, { useCallback, useContext, useEffect, useState } from "react";
import AddEmployee from "../employee/addemployee";

import TeacherItem from "./teacherItem";

interface DashboardTeacherProps extends React.PropsWithChildren {}

const DashboardTeacher: React.FunctionComponent<DashboardTeacherProps> = () => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const fetchTeachers = useCallback(async () => {
    const response = await httpRequest.getTeachers();
    if (response.status === 200) {
      dispatch({
        type: ContextActionTypes.Get_ALL_TEACHERS,
        payload: response.data.result,
      });
    }
  }, []);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  const openDialogBox = () => {
    setOpen((perv) => !perv);
  };
  useEffect(() => {
    openDialogBox();
  }, []);
  return (
    <>
      <div className="w-80 p-5">
        {" "}
        <Button title="Add Teacher" onClick={openDialogBox} to="" />
        {!open ? <AddEmployee role="teacher" /> : ""}
      </div>
      {state.employee.employeeList.length ? (
        <>
          <table className="w-11/12 m-5 border-collapse border border-r-dark-content">
            <thead>
              <tr>
                <th className="border border-slate-300 ...">Profile</th>
                <th className="border border-slate-300 ...">FullName</th>
                <th className="border border-slate-300 ...">Email</th>
                <th className="border border-slate-300 ...">Phone</th>
                <th className="border border-slate-300 ...">NationalId</th>
                <th className="border border-slate-300 ...">Courses</th>
                <th className="border border-slate-300 ...">BirthDate</th>
                <th className="border border-slate-300 ...">Address</th>
                <th className="border border-slate-300 ...">Manage</th>
              </tr>
            </thead>
            <tbody>
              {state.employee.employeeList.map((item) => (
                <TeacherItem
                  key={item._id}
                  isactive={item.isActive}
                  _id={item._id}
                  fullname={item.fullName}
                  email={item.email}
                  password={item.password}
                  birthdate={item.birthDate}
                  phonenumber={item.phoneNumber}
                  address={item.address}
                  nationalid={item.nationalId}
                  profile={item.profile}
                  registerdate={item.registerDate}
                  courses={item.courses}
                  salt={item.salt}
                  __v={0}
                />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        "there is not any teachers"
      )}
    </>
  );
};

export default DashboardTeacher;
