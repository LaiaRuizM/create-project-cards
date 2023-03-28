import GetAvatar from "../getAvatar/GetAvatar";
import "../../styles/layouts/Form.scss";

const Buttons = ({
  handleClickCreateCard,
  show,
  url,
  updatePhoto,
  updateImages,
  handleReset
}) => {
  return (
    <>
      <section className="form__buttons-img">
        <GetAvatar
          className="form__buttons-img--btn"
          text="Subir foto de autora"
          title="Subir foto de autora"
          updateAvatar={updateImages}
        ></GetAvatar>
        <GetAvatar
          className="form__buttons-img--btn"
          text="Subir foto de proyecto"
          title="Subir foto de proyecto"
          updateAvatar={updatePhoto}
        ></GetAvatar>
      </section>
      <section className="form__buttons-img-large">
        <button
          title="Haz click para crear tu tarjeta"
          className="form__buttons-img--btn-large"
          onClick={handleClickCreateCard}
        >
          Crear Tarjeta
        </button>
        <button className='form__buttons-img--btn-large' onClick={handleReset}>Clear</button>
      </section>
      <section className={show ? "form__card" : "form__card hidden"}>
        <span className=""> La tarjeta ha sido creada: </span>
        <a href={url} className="btn__url" target="_blank">
          {url}
        </a>
      </section>
    </>
  );
};

export default Buttons;
