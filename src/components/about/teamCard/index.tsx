import { BsGithub, BsLinkedin } from "react-icons/bs";

interface TeamCardProps extends React.PropsWithChildren {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

export const TeamCard: React.FunctionComponent<TeamCardProps> = ({
  name,
  role,
  github,
  linkedin,
}): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-between gap-3 rounded-xl bg-light-secondary p-3 text-light-content transition-all hover:scale-[102%] dark:bg-dark-secondary dark:text-dark-content md:w-[450px]">
      <img className="w-32 rounded-lg" src="/assets/logo.jpg" alt="logo" />
      <div className="flex h-full w-full flex-col justify-between">
        <p className="te flex flex-col uppercase text-light-heading dark:text-dark-heading">
          {name}
          <span className="capitalize italic text-light-content dark:text-dark-content">
            {" "}
            {role}
          </span>
        </p>
        <div className="flex gap-2">
          <a
            className={`hover:text-light-hover dark:hover:text-dark-hover ${
              !github && "hidden"
            }`}
            target="_blank"
            href={github}
          >
            <BsGithub size={25} />
          </a>
          <a
            className={`hover:text-light-hover dark:hover:text-dark-hover ${
              !linkedin && "hidden"
            }`}
            target="_blank"
            href={linkedin}
          >
            <BsLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
