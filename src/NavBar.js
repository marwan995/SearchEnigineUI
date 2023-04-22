import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (<div className="NavBar">
        <Link to={"/"}>
        <img src="https://i.ibb.co/h9ybS36/logo2.png" alt="" />
        </Link>
        <SearchInput/>
    </div>);
}

export default NavBar;