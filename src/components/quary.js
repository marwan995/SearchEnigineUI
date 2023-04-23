import { Link } from "react-router-dom";
import HighlightWords from  "./body"
const Quary = ({ title, url, des,words }) => {
  return (
    <div className="quary">
      <Link to={`${url}`}>
        <h2> {title} </h2>
      </Link>
      <h4>{url}</h4>
      <HighlightWords sentence={des} words={words} />
      {/* <p>{des}</p> */}
    </div>
  );
};

export default Quary;
