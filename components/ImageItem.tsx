"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageItemProps {
  url: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ImageItem: React.FC<ImageItemProps> = ({
  url,
  className = "",
  width = 350,
  height = 450,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <Image
        src={url}
        width={width}
        height={height}
        alt={`image-item-${url}`}
        className={`aspect-[3/4] transition-opacity duration-500 object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        priority
        onLoad={() => setIsLoading(false)} // Set loading state to false after the image is fully loaded
      />
    </div>
  );
};

export default ImageItem;
