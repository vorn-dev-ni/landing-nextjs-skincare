import Image from "next/image";
import React from "react";

const AppLogo = () => {
  return (
    <Image
      alt="logo-example"
      width={120}
      height={120}
      src={"/logo.png"}
      className="object-cover w-14 scale-150 "
    />
  );
};

export default AppLogo;
