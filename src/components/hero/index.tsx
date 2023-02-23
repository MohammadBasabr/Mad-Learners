import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

import { HeroMovieCart } from "./slideCart";

interface SlideProps extends React.PropsWithChildren {}

export const Slider: React.FunctionComponent<SlideProps> = (): JSX.Element => {
  const [currnetSlide, setCurrentSlide] = useState(0);
  let sliderInterval: any;
  const autoPlay: boolean = true;
  const slideSpeed: number = 3000;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/lesson/list?pagenumber=1&pagesize=8")
      .then((res) => setCourses(res.data.result.lessons))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    autoPlay && auto();
    return () => clearInterval(sliderInterval);
  }, [currnetSlide]);

  const slideHandler = () => {
    currnetSlide !== courses.length - 1
      ? setCurrentSlide(currnetSlide + 1)
      : setCurrentSlide(0);
  };

  const setSlideHandler = (index: any) => {
    setCurrentSlide(index);
  };

  const auto = () => {
    sliderInterval = setInterval(slideHandler, slideSpeed);
  };

  const nextHandler = () => {
    currnetSlide !== courses.length - 1
      ? setCurrentSlide(currnetSlide + 1)
      : setCurrentSlide(0);
  };

  const prevHandler = () => {
    currnetSlide !== 0
      ? setCurrentSlide(currnetSlide - 1)
      : setCurrentSlide(courses.length - 1);
  };

  return (
    <section className="relative h-[calc(100vh-96px)] w-full select-none bg-light-primary overflow-hidden dark:bg-dark-primary md:h-[calc(100vh-176px)]">
      <img
        className="absolute top-0 left-0 h-full w-full object-cover object-center"
        src="/assets/background.jpg"
        alt="background"
      />

      <div className="relative flex h-full w-full items-center backdrop-blur-sm md:backdrop-blur-0 justify-center md:justify-start">
        <div className="absolute z-20 w-1/2 flex-col justify-center right-0 items-center text-dark-heading uppercase text-3xl hidden lg:flex font-display font-semibold">
          <div className="flex flex-col justify-center items-center">
            <h1>"enroll</h1>
            <div className="relative h-10 flex w-[800px]">
              {courses.map((course: any, index) => {
                return (
                  <h2
                    className={`${
                      index === currnetSlide
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-96"
                    } absolute h-full flex justify-center items-center text-dark-hover w-full transition-all duration-300`}
                    key={index}
                  >
                    {course.lessonName}
                  </h2>
                );
              })}
            </div>
            <h1>and become a master programmer"</h1>
          </div>
        </div>
        {courses.map((_, index) => {
          return (
            <div
              key={index}
              className={`absolute ml-0 flex overflow-hidden w-[calc(100%-100px)] md:w-auto justify-center rounded-xl bg-dark-error flex-col items-center md:ml-16 ${
                currnetSlide !== index
                  ? "-translate-x-full opacity-0 -rotate-45"
                  : "translate-x-0 opacity-100 rotate-0 transition-all duration-700 "
              }  origin-bottom-left `}
            >
              <HeroMovieCart id={currnetSlide} courses={courses} />
              <div className="h-1 w-full bg-light-primary dark:bg-dark-primary">
                <div
                  className={`${
                    currnetSlide === index ? "w-0 animate-enlarge" : "w-full"
                  } h-full bg-light-hover dark:bg-dark-hover`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      {/* navigator */}
      <div className="absolute bottom-0 z-10 hidden h-5 w-full items-center justify-center gap-1 py-1 backdrop-brightness-50 md:flex">
        {courses.map((_, index) => {
          return (
            <div
              onClick={() => {
                setSlideHandler(index);
              }}
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-sm ${
                currnetSlide !== index ? "bg-light-primary " : "bg-light-hover "
              }`}
            ></div>
          );
        })}
      </div>
      {/* arrows */}
      <div className="flex w-full justify-between text-light-hover opacity-30 transition-all duration-500 hover:opacity-100 dark:text-dark-hover">
        <button
          className="absolute top-1/2 cursor-pointer rounded-full z-20 bg-light-primary dark:bg-dark-primary"
          onClick={prevHandler}
        >
          <AiOutlineLeftCircle size={40} />
        </button>
        <button
          className="absolute top-1/2 cursor-pointer right-0 items-center z-20 justify-center rounded-full bg-light-primary dark:bg-dark-primary"
          onClick={nextHandler}
        >
          <AiOutlineRightCircle size={40} />
        </button>
      </div>
    </section>
  );
};
