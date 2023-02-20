import { useEffect, useState } from "react";

interface CouterProps extends React.PropsWithChildren {
  title: string;
  number: number;
}

const Couter: React.FunctionComponent<CouterProps> = ({
  title,
  number,
}): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const timer = 3000;
  let time: any;

  const handleCount = () => {
    if (counter < number) {
      setCounter((prev) => (prev = counter + 1));
      clearInterval(time);
    }
  };

  time = setInterval(handleCount, timer / number);

  return (
    <div className="relative overflow-hidden w-full flex justify-center p-5 items-center group rounded-lg cursor-pointer bg-dark-primary dark:bg-dark-primary flex-col">
      <div className="bg-dark-hover absolute w-0 rounded-full ease-in aspect-square transition-all duration-500 group-hover:w-[200%]"></div>
      <div className="z-10 flex flex-col justify-center items-center">
        <span className="text-7xl font-bold group-hover:text-dark-primary transition-all duration-500">
          {counter}
        </span>
        <h2 className="group-hover:text-dark-primary ease-in transition-all duration-500 uppercase font-extrabold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Couter;
