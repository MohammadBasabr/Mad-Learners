import React, { useCallback, useContext, useEffect, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { AppContext } from "@/context/store";
import { httpRequest } from "@/services/httpRequest";
import { ContextActionTypes } from "@/@types/context/context.type";

interface AddLessonProps extends React.PropsWithChildren {}
interface Values {
  title: string;
  cost: number;
  enddate: string;
  startdate: string;
  capacity: number;
  teacher: string;
  lesson: string;
}
const AddLesson: React.FunctionComponent<AddLessonProps> = () => {
  const [open, setOpen] = useState(true);
  const { state, dispatch } = useContext(AppContext);
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
  }, [fetchCourses]);

  return (
    <>
      <div className={open ? `p-2 w-full` : `hidden p-2 w-full`}>
        <Formik
          initialValues={{
            title: "",
            cost: 0,
            enddate: "",
            startdate: "",
            capacity: 0,
            teacher: "",
            lesson: "",
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            values.capacity = Number(values.capacity);
            values.cost = Number(values.cost);
            try {
              const resp = await httpRequest.AddSubLesson(
                JSON.stringify(values)
              );
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
              <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <Field
                  id="title"
                  name="title"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="cost">Cost</label>
                <Field
                  id="cost"
                  name="cost"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="capacity">Capacity</label>
                <Field
                  id="capacity"
                  name="capacity"
                  className="p-2 outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="startdate">startDate</label>
                <Field
                  id="startdate"
                  name="startdate"
                  className="p-2 outline-none rounded-md"
                />
                <label htmlFor="enddate">endDate</label>
                <Field
                  id="enddate"
                  name="enddate"
                  className="p-2 outline-none rounded-md"
                />
              </div>
            </div>
            <div className="felx flex-col">
              <div id="teacher-radio-group" className="pt-5 pb-2">
                Teacher
              </div>
              <div
                role="group"
                aria-labelledby="teacher-radio-group"
                className="w-full"
              >
                {state.employee.employeeList.map((item) => {
                  return (
                    <label className="p-2">
                      <Field
                        type="radio"
                        name="teacher"
                        value={item._id}
                        className="w-5 h-5"
                      />
                      {item.fullName}
                    </label>
                  );
                })}
              </div>

              <div id="course-radio-group" className="pt-5 pb-2">
                Course
              </div>
              <div role="group" aria-labelledby="course-radio-group">
                {state.courses.coursesList.map((item) => {
                  return (
                    <label>
                      <Field
                        type="radio"
                        name="lesson"
                        value={item._id}
                        className="w-5 h-5"
                      />
                      {item.lessonName}
                    </label>
                  );
                })}
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

export default AddLesson;
