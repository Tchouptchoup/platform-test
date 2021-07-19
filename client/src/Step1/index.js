import { Container } from "./styled";

function Upload({ handleNext, setProducts }) {
  function handleFileUpload(event) {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });

    handleNext();
  }

  return (
    <Container>
      <>
        <p>Export your .csv file !</p>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </>
    </Container>
  );
}

export default Upload;
