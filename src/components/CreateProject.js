import Preview from "./Preview/Preview";
import Form from "./Form/Form";
import "../styles/layouts/Main.scss";
import { useState } from "react";
import dataApi from "../services/api";
import user from "../images/user.png";
import cover from "../images/proyecto.jpg";

const CreateProject = ({ cards, setCards }) => {
  const [dataError, setDataError] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });
  const [data, setData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: user,
    photo: cover,
  });

  const defaultData = {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: user,
    photo: cover,
  };

  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);

  const validateAllInputs = () => {
    const newDataError = dataError;
    Object.keys(data).map((item) => {
      const error = validateInput(item, data[item]);
      newDataError[item] = error;
      return null;
    });
    setDataError({ ...newDataError });
  };

  const checkErrors = () => {
    const result = Object.keys(dataError).map((item) => {
      return dataError[item] === "";
    });
    if (result.find((item) => item === false) === false) {
      return false;
    } else {
      return true;
    }
  };

  const updateImages = (avatar) => {
    setData({ ...data, image: avatar });
  };
  const updatePhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    validateAllInputs();
    if (checkErrors()) {
      dataApi(data).then((info) => {
        setUrl(info.cardURL);
        setShow(info.success);
        setCards([...cards, data]);
        setData(defaultData);
      });
    }
  };

  const handleReset = () => {
    setDataError(false);
    setShow(false);
    setData(defaultData);
  };

  const validateInput = (id, value) => {
    if (value === "") {
      return `Introduce ${id}`;
    }
    if (id === "repo" || id === "demo") {
      if (!(value.startsWith("https://") || value.startsWith("http://"))) {
        //todo No hagas esto y no hagas lo otro NO está OK (!value.startsWith("https://")  y !value.startsWith("http://") , debe ser no hagas esto o lo otro (como lo tenemos ahora está OK).
        return "Introduce un enlace válido que empiece por https:// o http://";
      }
    }
    return "";
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    const inputId = ev.target.id;
    const error = validateInput(inputId, inputValue);
    setData({ ...data, [inputName]: inputValue });
    setDataError({ ...dataError, [inputName]: error });
  };
  return (
    <main className="main">
      <Preview data={data}></Preview>
      <Form
        data={data}
        dataError={dataError}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        show={show}
        url={url}
        updatePhoto={updatePhoto}
        updateImages={updateImages}
        handleReset={handleReset}
      ></Form>
    </main>
  );
};

export default CreateProject;
