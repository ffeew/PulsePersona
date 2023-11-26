interface AnimatedBackgroundProps {
  children: React.ReactNode;
  backgroundClassname: string;
  fullWidth?: boolean;
}

export default function AnimatedBackground(props: AnimatedBackgroundProps) {
  const { children, backgroundClassname, fullWidth = true } = props;

  return (
    <div className={`${fullWidth && "w-full"} group relative`}>
      {children}
      <div
        className={`overlay w-full h-full scale-0 transition-all-bounce group-hover:scale-100 ${backgroundClassname}`}
      ></div>
      <div className="overlay w-full">{children}</div>
    </div>
  );
}
