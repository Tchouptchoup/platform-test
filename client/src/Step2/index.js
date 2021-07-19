import { useEffect, useState } from "react";

import { StyledImage, Container } from "./styled";

function ListImage({ handleNext, setSelectedImage }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  function handleSelect(image) {
    setSelectedImage(image);
    handleNext();
  }
  return (
    <Container>
      {images.map((image) => {
        const { id, picture } = image;
        return (
          <StyledImage
            onClick={() => handleSelect(image)}
            src={picture.url}
            alt={id}
          />
        );
      })}
    </Container>
  );
}

export default ListImage;
