import Quary from "./quary";
const RuseltList = ({ Quarys }) => {
  Quarys= Array.from(Quarys).filter(e=> e.body.length>50)
  return (
    <div className="RusltsList">
      {
      Quarys.map((Q, index) => (
        <Quary title={Q.title} url={Q.url} des={Q.body} key={index} words={Q.key}/>
      ))}
    </div>
  );
};

export default RuseltList;
