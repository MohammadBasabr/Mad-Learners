import React, { useContext, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import { ContextActionTypes } from "@/@types/context/context.type";

interface AddEmployeeProps extends React.PropsWithChildren {
  role: string;
}
interface Values {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
  nationalId: string;
  address: string;
  role: string;
  profile: string;
}
const AddEmployee: React.FunctionComponent<AddEmployeeProps> = ({ role }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useContext(AppContext).dispatch;
  return (
    <>
      <div className={open ? `p-2 w-full` : `hidden p-2 w-full`}>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            phoneNumber: "",
            birthDate: "",
            nationalId: "",
            address: "",
            role: role,
            profile: "",
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            try {
              const resp = await httpRequest.addEmployee(values);
              dispatch({
                type: ContextActionTypes.Add_New_Employee,
                payload: resp.data.result,
              });
            } catch (error) {
              console.log(error);
            }

            setOpen(false);
          }}
        >
          <Form className="flex flex-col">
            <div className="flex flex-row gap-10">
              <div>
                <label htmlFor="fullName">fullName</label>
                <Field
                  id="fullName"
                  name="fullName"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="email">email</label>
                <Field
                  id="email"
                  name="email"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="password">password</label>
                <Field
                  id="password"
                  name="password"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="phoneNumber">phoneNumber</label>
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  className="p-2 outline-none rounded-md"
                />
              </div>
              <div>
                <label htmlFor="birthDate">birthDate</label>
                <Field
                  id="birthDate"
                  name="birthDate"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="nationalId">nationalId</label>
                <Field
                  id="nationalId"
                  name="nationalId"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="address">address</label>
                <Field
                  id="address"
                  name="address"
                  className="p-2 outline-none rounded-md"
                />

                <Field
                  id="role"
                  name="role"
                  value={role}
                  className="hidden p-2 outline-none rounded-md"
                />
                <label htmlFor="profile">profile</label>
                <Field
                  id="profile"
                  name="profile"
                  className="p-2 outline-none rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 p-2 uppercase font-bold bg-dark-hover text-dark-secondary rounded-lg"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddEmployee;
