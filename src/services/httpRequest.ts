import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
export const httpRequest = {
  addCourse(values: any) {
    return axios.post("api/lesson/add", values);
  },
  editCourse(id: any, data: any) {
    return axios.put(`http://localhost:5000/api/lesson/${id}`, data);
  },
  getCourses() {
    return axios.get("http://localhost:5000/api/lesson");
  },
  getTeachers() {
    return axios.get("http://localhost:5000/api/employee/getallteachers");
  },
  removeEmployee(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.delete(`api/employee/${id}`, { headers });
  },
  addEmployee(values: any) {
    return axios.post("api/auth/employee/register", values);
  },
  loginEmployee(values: any) {
    return axios.post("api/auth/employee/login", values);
  },
  editEmployee(id: any, data: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/employee/${id}`, data, { headers });
  },
  activeEmployee(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/employee/active/${id}`, {}, { headers });
  },
  deActiveEmployee(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/employee/deactive/${id}`, {}, { headers });
  },
  getLessons() {
    return axios.get("api/course/getall");
  },
  AddSubLesson(values: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
      "Content-Type": "application/json",
    };
    return axios.post("api/course/", values, { headers });
  },
  removeLesson(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.delete(`api/course/${id}`, { headers });
  },
  editLesson(id: any, data: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/course/${id}`, data, { headers });
  },
  getCurrentLesson(id: any) {
    return axios.get(`api/course/${id}`);
  },
  getStudents() {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.get("api/student/getall", { headers });
  },
  removeStudent(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.delete(`api/student/${id}`, { headers });
  },
  editStudent(id: any, data: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/student/${id}`, data, { headers });
  },
  activeStudent(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/student/active/${id}`, {}, { headers });
  },
  deActiveStudent(id: any) {
    const authData = localStorage.getItem("quera-academy-jwt");
    const headers = {
      "x-auth-token": authData && JSON.parse(authData).token,
    };
    return axios.put(`api/student/deactive/${id}`, {}, { headers });
  },
};
