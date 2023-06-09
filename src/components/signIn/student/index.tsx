import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../../base/button";
import Error from "../../base/inputs/error";
import Input from "../../base/inputs/input";
import swal from "sweetalert";

import { validate } from "./validateLogin";

const StudentSignIn: React.FC = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let touch: {
    email: boolean;
    password: boolean;
  } = {
    password: false,
    email: false,
  };
  let error: {
    password?: string;
    email?: string;
  } = {
    password: "",
    email: "",
  };

  const [errors, setErrors] = useState(error);
  const [touched, setTouched] = useState(touch);

  useEffect(() => {
    return setErrors(validate(data, "signin"));
  }, [data, touched]);

  const handleSubmit = () => {
    let body = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    axios(config)
      .then(function (response) {
        swal(response.data.message[0].message);
      })
      .catch(function (error) {
        console.log(error.response);
        if (data.email == "" || data.password == "") {
          swal(error.response.data.message[0].message);
        } else {
          swal(error.response.data.message.message[0].message);
        }
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
        email: true,
        password: true,
      });
    }
  };
  return (
    <div className="flex h-full w-full items-center justify-center bg-light-primary dark:bg-dark-primary md:p-6">
      <form
        onSubmit={submitHandler}
        className="border-1 border-black w-full rounded-[10px] border-solid p-2 md:w-[800px]"
      >
        <fieldset className="mb-[10px] flex h-[75px] flex-col items-center justify-between border-0 p-0 text-light-content dark:text-dark-content">
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
          <div className="flex flex-row justify-between lg:w-full md:w-1/2">
            <Link href="/signup">
              <h2 className="text-xl uppercase text-light-hover">
                create an account
              </h2>
            </Link>
            <Link href="/forgetPassword">
              <h2 className="text-xl uppercase text-light-hover">
                forget your password? 
              </h2>
            </Link>          
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row">
          <div className="lg:w-full md:w-1/2">
            <Button title="Log In" to="#" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentSignIn;
