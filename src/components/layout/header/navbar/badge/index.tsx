interface BadgeItemProps extends React.PropsWithChildren {
  value?: string;
}

export const Badge: React.FunctionComponent<BadgeItemProps> = ({
  value,
}): JSX.Element => {
  return (
    <div
      className={`${
        !value && "hidden"
      } absolute top-1 right-1 flex items-center justify-center`}
    >
      <div className="absolute h-5 w-5 animate-ping rounded-full bg-light-hover dark:bg-dark-hover"></div>
      <div className="absolute flex h-5 w-5 items-center justify-center rounded-full bg-light-hover text-xs text-light-secondary dark:bg-dark-hover dark:text-dark-primary">
        {value}
      </div>
    </div>
  );
};
