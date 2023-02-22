import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../base/button";
import Error from "../base/inputs/error";
import Input from "../base/inputs/input";
import swal from "sweetalert";

import { validate } from "./validateResetPassword";

const resetPassword: React.FC = () => {
  const [data, setData] = useState({
    password: "",
  });
  let touch: {
    password: boolean;
  } = {
    password: false,
  };
  let error: {
    password?: string;
  } = {
    password: "",
  };

  const [errors, setErrors] = useState(error);
  const [touched, setTouched] = useState(touch);

  useEffect(() => {
    return setErrors(validate(data, "signin"));
  }, [data, touched]);

  const handleSubmit = () => {
    let body = JSON.stringify({
      "password": data.password,
    });
    
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/resetPassword/:token',
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

  const changeHandler = (event: { target: { name: any; value: any } }) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const touchHandler = (event: { target: { name: any } }) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
    } else {
      setTouched({
        password: true,
      });
    }
  };
  return (
    <div className="flex h-[calc(100vh-96px)] w-full items-center justify-center bg-light-primary dark:bg-dark-primary md:h-[calc(100vh-176px)] md:p-6">
      <form
        onSubmit={submitHandler}
        className="border-1 border-black w-full rounded-[10px] border-solid p-2 md:w-[800px]"
      >
        <h2 className="mb-[40px] text-left text-lg font-bold uppercase  text-light-heading dark:text-dark-heading">
          Reset Password
        </h2>
        <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between border-0 p-0 text-light-content dark:text-dark-content">
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
        <div className="mt-10 flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row">
          <div className="w-full md:w-1/2">
            <Button title="Reset password" to="#" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default resetPassword;
