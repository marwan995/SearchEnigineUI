import { Link } from "react-router-dom"

const Quary = ({title,url,des}) => {
    return (<div className="quary">
        <Link to={`${url}`}>
            <h2> {title} </h2>
        </Link>
        <h4>{url}</h4>
        <p>{des}</p>
    </div >);
}

export default Quary;