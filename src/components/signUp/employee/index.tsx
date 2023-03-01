import React, { useEffect, useState } from "react";
import { Button } from "../../base/button";
import { validate } from "./validateRegister";
import Error from "../../base/inputs/error";
import Input from "../../base/inputs/input";
import Link from "next/link";
import axios from "axios";
import { number } from "yup";
import swal from 'sweetalert';

const EmployeeSignUp: React.FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
    birthDate: "",
    nationalId: "",
    phoneNumber: "",
    address: "22, first street, LA",
    role: "admin",
    profile: "https://s27.picofile.com/file/8460164718/profile.png",
  });
  let touch: {
    name: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
    isAccepted: boolean;
    birthDate: boolean,
    nationalId: boolean,
    phoneNumber: boolean,
    profile: boolean,    
  } = {
    name: false,
    password: false,
    email: false,
    confirmPassword: false,
    isAccepted: false,
    birthDate: false,
    nationalId: false,
    phoneNumber: false,  
    profile: false,     
  };
  let error: {
    name?: string;
    password?: string;
    email?: string;
    confirmPassword?: string;
    isAccepted?: string;
    birthDate?: string,
    nationalId?: string,
    phoneNumber?: string,
    role?: string,
    profile?: string,    
    
  } = {
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
    isAccepted: "",
    birthDate: "",
    nationalId: "",
    phoneNumber: "",
    role: "",
    profile: "",     
  };

  const [errors, setErrors] = useState(error);
  const [touched, setTouched] = useState(touch);

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  const handleSubmit = () => {
    let body = JSON.stringify({
      "fullName": data.name,
      "email": data.email,
      "password": data.password,
      "phoneNumber": data.phoneNumber,
      "birthDate": data.birthDate,
      "nationalId": data.nationalId,
      "address": data.address,
      "role": data.role,
      "profile": data.profile
    });
    
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/auth/employee/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : body
    };
    
    axios(config)
    .then(function (response) {
      swal(response.data.message[0].message);
    })
    .catch(function (error) {
      swal(error.response.data.message[0].message);
    });
  };

  const changeHandler = (event: {
    target: { name: string; checked: any; value: any };
  }) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const touchHandler = (event: { target: { name: any } }) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
        birthDate: true,
        nationalId: true,
        phoneNumber: true,
        profile: true,       
      });
    }
  };
  return (
    <div className="flex h-full w-full items-center justify-center bg-light-primary dark:bg-dark-primary md:p-6">
      <form
        onSubmit={submitHandler}
        className="border-1 border-black w-full flex flex-col rounded-[10px] border-solid p-2 md:w-[800px]"
      >
        <div className="flex flex-row justify-between gap-1 w-full">
          <span className="w-1/2">
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="name"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.name && errors.name && <Error errorName={errors.name} />}
            </fieldset>
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="email"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.email && errors.email && <Error errorName={errors.email} />}
            </fieldset>   
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="phoneNumber"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                type="string"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.phoneNumber && errors.phoneNumber && <Error errorName={errors.phoneNumber} />}
            </fieldset> 
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="nationalId"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                National id
              </label>
              <Input
                id="nationalId"
                type="string"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.nationalId && errors.nationalId && <Error errorName={errors.nationalId} />}
            </fieldset>                            
          </span>
          <span className="w-1/2">
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="birthDate"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                Birth Date
              </label>
              <Input
                id="birthDate"
                type="string"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.birthDate && errors.birthDate && <Error errorName={errors.birthDate} />}
            </fieldset>    
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="password"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.password && errors.password && (
                <Error errorName={errors.password} />
              )}
            </fieldset>  
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="confirmPassword"
                className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
                Confirm Password
              </label>

              <Input
                id="confirmPassword"
                type="password"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Error errorName={errors.confirmPassword} />
              )}
            </fieldset>   
            <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between text-light-content dark:text-dark-content">
              <label
                htmlFor="profile"
              className="mb-[10px] w-full text-left text-light-content dark:text-dark-content"
              >
              Profile
              </label>

              <Input
                id="profile"
                type="file"
                data={data}
                error={error}
                touch={touched}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {touched.profile && errors.profile && (
                <Error errorName={errors.profile} />
              )}
            </fieldset>                                 
          </span>  
        </div>                                                  
        <fieldset className="flex mt-3 flex-col items-center justify-between text-light-content dark:text-dark-content">
          <div className="flex w-full flex-row items-center text-center">
            <label
              htmlFor="isAccepted"
              className="text-left text-light-content dark:text-dark-content"
            >
              I accept terms of privacy policy
            </label>
            <input
              id="isAccepted"
              className="ml-[20px] h-[18px] w-[18px] appearance-none rounded-[5px] border-4 border-solid border-light-secondary bg-light-secondary checked:bg-light-hover dark:border-dark-secondary dark:bg-dark-secondary dark:checked:bg-dark-hover"
              type="checkbox"
              name="isAccepted"
              checked={data.isAccepted}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
          </div>
          {touched.isAccepted && errors.isAccepted && (
            <Error errorName={errors.isAccepted} />
          )}
        </fieldset>
        <div className="mt-3 flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row">
          <Link href={"/signin"}>
            <h2 className="text-xl uppercase text-light-hover">
              already have an account
            </h2>
          </Link>
          <div className="w-full md:w-1/2">
            <Button title="Register" to="#" onClick={handleSubmit}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeSignUp;
