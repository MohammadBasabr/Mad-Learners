import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { httpRequest } from "@/services/httpRequest";
import { ContextActionTypes } from "@/@types/context/context.type";
import { AppContext } from "@/context/store";
import router from "next/router";
import { validate } from "@/components/signIn/validateLogin";

export interface DashboardSignInProps {}
interface Values {
  email: string;
  password: string;
}
const DashboardSignIn: React.FunctionComponent<DashboardSignInProps> = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <div className="flex h-[calc(100vh-96px)] w-full items-center justify-center bg-light-primary dark:bg-dark-primary md:h-[calc(100vh-176px)] md:p-6">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={
            //npm i react-toastify  for validation
            async (
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              if (values.email === "" || values.password === "") {
                alert("Username and Password is required");
                return false;
              }
              const dataValidation = validate(values, "signin");
              if (dataValidation.email) {
                alert(dataValidation.email);
                return false;
              }
              if (dataValidation.password) {
                alert(dataValidation.password);
                return false;
              }
              try {
                const resp = await httpRequest.loginEmployee(values);
                dispatch({
                  type: ContextActionTypes.Login_Success,
                  payload: {
                    id: resp.data.result.employeeModel._id,
                    token: resp.data.result.jwtToken,
                  },
                });
                router.push("/admin");
              } catch (error: any) {
                if (error.response.status == "400") {
                  alert("User has not been registered");
                  return false;
                }
              }
            }
          }
        >
          <Form className="border-1 border-black w-full rounded-[10px] border-solid p-2 md:w-[800px] flex flex-col">
            <label
              htmlFor="email"
              className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
            >
              username
            </label>
            <Field
              id="email"
              name="email"
              className="p-2 outline-none rounded-md"
            />
            <label
              htmlFor="password"
              className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
            >
              password
            </label>
            <Field
              id="password"
              name="password"
              className="p-2 outline-none rounded-md"
            />

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

export default DashboardSignIn;
