import { useState } from "react";

import { Container } from "./styles";

type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
  const srcImgNotFound =
    "https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg";

  const [srcImg, setSrcImg] = useState(src);

  return (
    <Container>
      <img src={srcImg} alt={alt} onError={() => setSrcImg(srcImgNotFound)} />
    </Container>
  );
}

export default Image;
