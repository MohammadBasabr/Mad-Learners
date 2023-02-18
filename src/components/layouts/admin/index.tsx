interface PanelAdminProps extends React.PropsWithChildren {}
import Link from "next/link";
import { FaChalkboardTeacher, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { Nav } from "../main/navbar";
import Counter from "./counter";
import Courses from "./form/courses";

const PanelAdmin: React.FunctionComponent<
  PanelAdminProps
> = (): JSX.Element => {
  return (
    <section className="flex h-screen">
      <aside className="relative gap-3 bg-light-primary px-1 flex md:w-[300px] flex-col h-full md:pl-2 py-3 text-light-heading dark:bg-dark-primary">
        <Link
          href="/"
          className="p-3 h-14 md:rounded-l-md text-light-primary gap-2 flex rounded-md items-center text-3xl left-0 w-full bg-light-heading"
        >
          <FaHome size={30} />
          <span className="hidden md:block">صفحه خانه</span>
        </Link>
        <div className="h-full flex flex-col items-center md:items-start py-3 gap-1">
          <div className="relative rounded-md group overflow-hidden aspect-square md:aspect-auto flex w-full py-2 md:pr-8 md:pl-3 bg-light-secondary md:rounded-l-md gap-2 justify-center items-center cursor-pointer">
            <div className="bg-dark-hover absolute w-0 rounded-full ease-in aspect-square transition-all duration-500 group-hover:w-[200%]"></div>
            <div className="flex gap-2 items-center z-10">
              <FaChalkboardTeacher size={30} />
              <div className="hidden md:block">اساتید آموزشگاه</div>
            </div>
          </div>
        </div>
      </aside>
      <article className="w-full flex flex-col bg-light-secondary text-light-content gap-3 p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
          <Counter number={98} title={"استاد باتجربه"} />
          <Counter number={58} title={"دوره کاربردی"} />
          <Counter number={35} title={"دانشجوی فعال"} />
          <Counter number={18} title={"استخدام موفق"} />
        </div>
        <div className="h-full">
          <Courses />
        </div>
      </article>
    </section>
  );
};

export default PanelAdmin;
