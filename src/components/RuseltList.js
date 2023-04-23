import Quary from "./quary";
const RuseltList = ({ Quarys }) => {
  return (
    <div className="RusltsList">
      {Quarys.map((Q, index) => (
        <Quary title={Q.title} url={Q.url} des={Q.body} key={index}/>
      ))}
    </div>
  );
};

export default RuseltList;
