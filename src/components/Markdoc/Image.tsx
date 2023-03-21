import React, { useEffect, useState } from "react";
import NextImage from 'next/image'

interface ImageProps {
  src: string;
  alt: string;
}
const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const [imgSrc, setImgSrt] = useState<string>("");
  useEffect(() => {
    if (src.startsWith("http")) {
      setImgSrt(src);
    } else {
      import(`@/src/pages/docs${src}`)
        .then((img) => setImgSrt(img.default.src))
        .catch(() => {});
    }
  }, [src]);
  return (
    <span className="img_box">{imgSrc && <NextImage src={imgSrc} alt={alt} fill />}</span>
  );
};

export default Image;
