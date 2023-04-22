import Quary from "./quary";
const RuseltList = ({ Quarys }) => {
    return (<div className="RusltsList">
        {Quarys.map((Q) => (

                <Quary title={Q.title} url={Q.url} des={Q.des} />
            ))}

    </div>);
}

export default RuseltList;