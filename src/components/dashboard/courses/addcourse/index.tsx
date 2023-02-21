import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import axios from 'axios';
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
  
    return ( <>
    <div>
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
            const arr = str.split(';');
            values.topics =arr;
            values.category = Number(values.category)
            console.log(values)
            try{
                const resp = await axios.post('http://localhost:5000/api/lesson/add',values);
            }catch(error){
                console.log(error)
            }
            


        }}
    >
        <Form>
          <label htmlFor="lessonName">lessonName</label>
          <Field id="lessonName" name="lessonName" />
          <label htmlFor="description">description</label>
          <Field id="description" name="description" />
          <label htmlFor="topics">topics</label>
          <Field id="topics" name="topics" placeholder="separate items using ;" />
          <label htmlFor="image">image</label>
          <Field id="image" name="image"  />
          <label htmlFor="category">category</label>
          <Field id="category" name="category" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </> );
}

export default AddCourse;