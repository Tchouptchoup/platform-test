import { useState } from "react";

import Upload from "./Step1";
import ListImage from "./Step2";
import ImageTag from "./Step3";

import { Container, StepTitle, Content } from "./styled";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});

  function handleNext() {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <Container>
      <StepTitle>Step {currentStep}</StepTitle>
      <Content>
        {currentStep === 1 && (
          <Upload handleNext={handleNext} setProducts={setProducts} />
        )}
        {currentStep === 2 && (
          <ListImage
            handleNext={handleNext}
            setSelectedImage={setSelectedImage}
          />
        )}
        {currentStep === 3 && (
          <ImageTag
            handleNext={handleNext}
            selectedImage={selectedImage}
            products={products}
          />
        )}
      </Content>
    </Container>
  );
}

export default App;
