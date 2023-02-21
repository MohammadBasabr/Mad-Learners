import React, { useContext, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { AppContext } from '@/context/store';
import { ContextActionTypes } from '@/@types/context/context.type';
import { httpRequest } from '@/services/httpRequest';
interface AddCourseProps extends React.PropsWithChildren {
}
interface Values {
    lessonName: string;
    topics: string[];
    description: string;
    image: string;
    category:number;
}
const AddCourse: React.FunctionComponent<AddCourseProps> = () => {
    const [open,setOpen] = useState(true)
    const dispatch = useContext(AppContext).dispatch;
    return ( <>
    <div className={open ? `p-2 w-full`:`hidden p-2 w-full`}>
      <Formik 
        initialValues={{
            lessonName: '',
            topics:[''],
            description:'',
            image: '',
            category:0
        }}
        onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            const str = values.topics+'';
            if(str.includes(';')){
                const arr = str.split(';');
                values.topics =arr;
            }else{
                const arr = str.split(' ');
                values.topics =arr;
               // console.log(typeof(values.topics))
            }
            values.category = Number(values.category)
            //console.log(values)
            try{
                const resp = await httpRequest.addCourse(values)
                dispatch({
                    type:ContextActionTypes.ADD_NEW_Course,
                    payload:resp.data.result
                })
                //console.log(resp.data.result)
            }catch(error){
                console.log(error)
            }
            
            setOpen(false);

        }}
    >
        <Form className='flex flex-col'>
          <label htmlFor="lessonName">lessonName</label>
          <Field id="lessonName" name="lessonName" className="p-2 outline-none rounded-md"/>
          <label htmlFor="description">description</label>
          <Field id="description" name="description" className="p-2 outline-none rounded-md"/>
          <label htmlFor="topics">topics</label>
          <Field id="topics" name="topics"  className="p-2 outline-none rounded-md"/>
          <label htmlFor="image">image</label>
          <Field id="image" name="image" className="p-2 outline-none rounded-md" />
          <label htmlFor="category">category</label>
          <Field id="category" name="category" className="p-2 outline-none rounded-md"/>
          <button type="submit" className='mt-2 p-2 uppercase font-bold bg-dark-hover text-dark-secondary rounded-lg'>Submit</button>
        </Form>
      </Formik>
    </div>
    </> );
}

export default AddCourse;