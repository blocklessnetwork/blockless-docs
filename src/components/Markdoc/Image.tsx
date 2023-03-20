import React, { useEffect, useState } from "react";

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
    <span className="img_box">{imgSrc && <img src={imgSrc} alt={alt} />}</span>
  );
};

export default Image;
