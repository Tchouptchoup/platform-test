import { useState } from "react";
import ImageMapper from "react-image-mapper";

import { ProductPicker, StyledImage } from "./styled";

function ImageTag({ selectedImage, products }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [open, setOpen] = useState(false);
  const { picture } = selectedImage;

  function handleClickImage(area) {
    setSelectedLocation({
      x: area.nativeEvent.offsetX,
      y: area.nativeEvent.offsetY,
    });
    setOpen(true);
  }

  return (
    <>
      <ImageMapper
        src={picture.url}
        width={500}
        imgWidth={500}
        onImageClick={(area) => {
          handleClickImage(area);
        }}
      />
      {open && (
        <ProductPicker>
          {products.map((product) => {
            const { id, picture } = product;
            console.log("coucou", product);
            return (
              <StyledImage
                src={picture.url}
                alt={id}
              />
            );
          })}
        </ProductPicker>
      )}
    </>
  );
}

export default ImageTag;
