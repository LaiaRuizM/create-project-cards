/* import Header from '../Header/Header'; */
import Card from "../Preview/Preview";
import "../../styles/layouts/Preview.scss";
import "../../styles/layouts/Card.scss";

const CardDetail = ({cards}) => {
    return (
        <div className="landingDiv">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    )
}

export default CardDetail;