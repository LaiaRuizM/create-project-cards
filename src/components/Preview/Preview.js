import Profile from "../getAvatar/Profile";
import Card from "./Card";
import "../../styles/layouts/Preview.scss";

const Preview = ({ data, cover }) => {
  return (
    <section className="preview">
      <Profile avatar={data.photo} className="image"></Profile>
      <Card data={data}></Card>
    </section>
  );
};

export default Preview;
