import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-7xl w-full mx-auto  px-8 sm:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
