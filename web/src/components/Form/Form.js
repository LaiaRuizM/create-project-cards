import Autora from "./Autora";
import Buttons from "./Buttons";
import Project from "./Project";
import "../../styles/layouts/Form.scss";

const Form = ({
  data,
  dataError,
  handleInput,
  handleClickCreateCard,
  show,
  url,
  updatePhoto,
  updateImages,
  handleReset
}) => {

  return (
    <section className="form">
      <h2 className="form__title">Información</h2>

      <Project
        data={data}
        dataError={dataError}
        handleInput={handleInput}
      ></Project>

      <Autora
        data={data}
        dataError={dataError}
        handleInput={handleInput}
      ></Autora>

      <Buttons
        handleClickCreateCard={handleClickCreateCard}
        show={show}
        url={url}
        updatePhoto={updatePhoto}
        updateImages={updateImages}
        handleReset={handleReset}
      >
        {" "}
      </Buttons>
    </section>
  );
};

export default Form;
