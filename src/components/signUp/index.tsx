import React, { useEffect, useState } from "react";
import { Button } from "../base/button";
import { validate } from "./validateRegister";
import Error from "../base/inputs/error";
import Input from "../base/inputs/input";
import Link from "next/link";

const SignUp: React.FC = () => {
  const notcompleted = "bg-light-error";
  const formInput = "bg-light-secondary";
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  let touch: {
    name: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
    isAccepted: boolean;
  } = {
    name: false,
    password: false,
    email: false,
    confirmPassword: false,
    isAccepted: false,
  };
  let error: {
    name?: string;
    password?: string;
    email?: string;
    confirmPassword?: string;
    isAccepted?: string;
  } = {
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
    isAccepted: "",
  };

  const [errors, setErrors] = useState(error);
  const [touched, setTouched] = useState(touch);

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

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
      alert("You signed up successfully");
    } else {
      alert("Invalid data");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div className="flex h-[calc(100vh-96px)] w-full items-center justify-center bg-light-primary dark:bg-dark-primary md:h-[calc(100vh-176px)] md:p-6">
      <form
        onSubmit={submitHandler}
        className="border-1 border-black w-full rounded-[10px] border-solid p-2 md:w-[800px]"
      >
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
        <fieldset className="mb-[10px] mt-20 flex h-[30px] flex-col items-center justify-between text-light-content dark:text-dark-content">
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
        <div className="mt-10 flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row">
          <Link href={"/signin"}>
            <h2 className="text-xl uppercase text-light-hover">
              already have an account
            </h2>
          </Link>
          <div className="w-full md:w-1/2">
            <Button title="Register" to="#" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
