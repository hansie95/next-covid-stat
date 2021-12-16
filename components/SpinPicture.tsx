import Image from "next/image";
import React from "react";

const SpinPicture = ({ className, src, height, width }: any) => {
  return (
    <div className={className}>
      <Image src={src} alt="covid bacterium" width={width} height={height} />
    </div>
  );
};

export default SpinPicture;
