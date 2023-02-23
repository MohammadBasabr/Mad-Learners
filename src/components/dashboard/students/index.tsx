import { ContextActionTypes } from "@/@types/context/context.type";
import { Button } from "@/components/base/button";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import React, { useCallback, useContext, useEffect, useState } from "react";
import AddEmployee from "../employee/addemployee";
import StudentItem from "./studentItem";

interface DashboardStudentsProps extends React.PropsWithChildren {}

const DashboardStudents: React.FunctionComponent<
  DashboardStudentsProps
> = () => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const fetchStudents = useCallback(async () => {
    const response = await httpRequest.getStudents();
    if (response.status === 200) {
      dispatch({
        type: ContextActionTypes.Get_ALL_STUDENTS,
        payload: response.data.result,
      });
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const openDialogBox = () => {
    setOpen((perv) => !perv);
  };
  useEffect(() => {
    openDialogBox();
  }, []);
  return (
    <>
      <div className="w-80 p-5">
        <Button title="Add Student" onClick={openDialogBox} to="" />
        {!open ? <AddEmployee role="student" /> : ""}
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
                <StudentItem
                  key={item._id}
                  isActive={item.isActive}
                  _id={item._id}
                  fullName={item.fullName}
                  email={item.email}
                  password={item.password}
                  birthDate={item.birthDate}
                  phoneNumber={item.phoneNumber}
                  address={item.address}
                  nationalId={item.nationalId}
                  profile={item.profile}
                  registerDate={item.registerDate}
                  courses={item.courses}
                  salt={item.salt}
                  __v={0}
                />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        "there is not any students"
      )}
    </>
  );
};

export default DashboardStudents;
