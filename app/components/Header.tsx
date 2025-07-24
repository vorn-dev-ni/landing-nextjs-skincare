import React from "react";

const Header = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) => {
  return (
    <header
      className={`col-span-full space-y-2 text-center mt-12 ${className}`}
    >
      <h5 className=" text-center h4 font-normal">{title}</h5>

      <p className="body1 col-span-full text-gray-600  text-center mx-0 lg:mx-48 mb-10 mt-4">
        {desc}
      </p>
    </header>
  );
};

export default Header;
