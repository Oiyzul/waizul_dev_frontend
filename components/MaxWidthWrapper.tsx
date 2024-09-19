type PropsType = {
    className?: string;
    children: React.ReactNode
}

const MaxWidthWrapper = ({className, children}:PropsType) => {
  return <div className="w-full max-w-screen-xl mx-auto p-2 lg:p-4">
    {children}
  </div>;
};

export default MaxWidthWrapper;
