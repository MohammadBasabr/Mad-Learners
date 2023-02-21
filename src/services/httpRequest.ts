import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
export const httpRequest = {
    addCourse(values:any) {
      return axios.post('api/lesson/add', values);
    },
    editCourse(id:any,data:any){
      return axios.put(`http://localhost:5000/api/lesson/${id}`,data)
    },
    getCourses(){
      return axios.get("http://localhost:5000/api/lesson");
    }
  
};
  