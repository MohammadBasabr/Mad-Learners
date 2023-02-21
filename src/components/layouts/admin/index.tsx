interface AdminLayoutProps extends React.PropsWithChildren {}
import Link from "next/link";
import { FaChalkboardTeacher, FaHome, FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import Counter from "./counter";
import AdminTab from "./tab";

interface AdminLayoutProps extends React.PropsWithChildren {}
const AdminLayout: React.FunctionComponent<AdminLayoutProps> = ({
  children,
}): JSX.Element => {
  console.log("im rerendering");
  return (
    <>
      <section className="flex h-screen overflow-hidden">
        <aside className="relative gap-3 items-center w-[60px] bg-dark-primary flex md:w-[300px] flex-col h-full text-dark-heading dark:bg-dark-primary">
          <Link
            href="/"
            className="p-3 h-14 text-dark-content gap-2 flex uppercase items-center text-3xl w-full bg-dark-secondary"
          >
            <FaHome size={36} />
            <span className="hidden md:block w-full h-7">home</span>
          </Link>
          <div className="flex flex-col gap-2 w-full">
            <AdminTab title="teachers" to={"/admin/teacher"}>
              <FaChalkboardTeacher size={22} />
            </AdminTab>
            <AdminTab title="students" to={"/admin/students"}>
              <FaUsers size={22} />
            </AdminTab>
            <AdminTab title="lessons" to={"/admin/lessons"}>
              <ImBooks size={22} />
            </AdminTab>
            <AdminTab title="courses" to={"/admin/courses"}>
              <IoBookSharp size={22} />
            </AdminTab>
          </div>
        </aside>
        <article className="md:w-[calc(100%-300px)] w-[calc(100%-60px)] flex flex-col bg-dark-secondary text-dark-content gap-3 p-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 ">
            <Counter number={98} title={"teachers"} />
            <Counter number={58} title={"courses"} />
            <Counter number={35} title={"students"} />
            <Counter number={18} title={"lessons"} />
          </div>
          <div className="h-full w-full flex flex-col items-center p-4 dark:bg-dark-primary bg-dark-primary overflow-scroll dark:scrollbar-thumb-dark-hover scrollbar-thumb-light-hover scrollbar-track-light-secondary dark:scrollbar-track-dark-secondary scrollbar-thin">
            {children}
          </div>
        </article>
      </section>
    </>
  );
};

export default AdminLayout;
