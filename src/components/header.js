import "../style/header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-regular-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"
export default function Header(){
    return(
        <div className="header">
            <div className="logo"><h2><FontAwesomeIcon icon={faAirbnb}/>airbnb</h2></div>
            <button className="button-1">Log in</button>
        </div>
    )
}