import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../base/button";
import Error from "../base/inputs/error";
import Input from "../base/inputs/input";

import { validate } from "./validateLogin";

const SignIn: React.FC = () => {
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
    axios
      .post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
      alert("You signed in successfully");
    } else {
      alert("Invalid data");
      setTouched({
        email: true,
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
          Sign In
        </h2>
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
          <Link href="/signup">
            <h2 className="text-xl uppercase text-light-hover">
              create an account
            </h2>
          </Link>
          <div className="w-full md:w-1/2">
            <Button title="Log In" to="#" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
