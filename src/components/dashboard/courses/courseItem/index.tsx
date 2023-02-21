import { ContextActionTypes } from '@/@types/context/context.type';
import { AppContext } from '@/context/store';
import axios from 'axios';
import React, { useContext } from 'react';
import {CiCircleRemove} from 'react-icons/ci'
interface CourseItemProps extends React.PropsWithChildren{
    topics: string[];
    _id: string;
    CourseName: string;
    image: string;
    description: string;
    category:number;
    __v:number
}

const CourseItem: React.FunctionComponent<CourseItemProps> = ({
    topics,
    _id,
    CourseName,
    image,
    description,
    category,
    __v
}) => {
    const dispatch = useContext(AppContext).dispatch;
    const removeCourse=async (id:string)=>{
        try{
            const resp = await axios.delete(`http://localhost:5000/api/lesson/${id}`) 
            dispatch({
                type:ContextActionTypes.Delete_Current_course,
                payload:{id}
            })
        }catch(error){
            console.log(error)
        }


    }


    return ( <>
    <tr>
        <td className='border border-r-dark-content'><img src={image} width={100} height={100}/></td>
        <td className='border border-r-dark-content'>{CourseName}</td>
        <td className='border border-r-dark-content break-normal'>{description}</td>
        <td className='border border-r-dark-content'>
            {topics.map((item)=>(item+' ; '))}
        </td>
        <td className='border border-r-dark-content'>{category}</td>
        <td className='border border-r-dark-content'><CiCircleRemove className='text-dark-error' onClick={()=>removeCourse(_id)}/></td>
    </tr>
    </> );
}

export default CourseItem;

