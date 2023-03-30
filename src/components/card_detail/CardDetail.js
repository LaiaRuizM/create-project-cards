/* import Header from '../Header/Header'; */
import Card from '../Preview/Preview';
import Profile from '../getAvatar/Profile';
import '../../styles/layouts/Preview.scss';
import '../../styles/layouts/Card.scss';

const CardDetail = ({ data }) => {
  return (
    <>
      <Profile avatar={data.photo} className="image"></Profile>
      <Card data={data}></Card>
    </>
  );
};

export default CardDetail;
