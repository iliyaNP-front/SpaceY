import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-Content">
                    <ul className="Footer-Lists">
                        <Link className="list" to="/">Home</Link>
                        <Link className="list" to="/Planets">Planets</Link>
                        <Link className="list" to="/News">News</Link>
                    </ul>
                    <h1 className="Footer-Logo">
                        SpaceY
                    </h1>
            </div>
            <div className="Footer-Copyright-Section">
                <p className="Footer-Copyright">© 2025 iliya naghipour. All rights reserved.</p>
                <div className="Footer-Icons-div">
                    <FontAwesomeIcon icon={faFacebook}  className="Footer-Icons" />
                    <FontAwesomeIcon icon={faInstagram}  className="Footer-Icons" />
                    <FontAwesomeIcon icon={faTelegram}  className="Footer-Icons" />
                </div>
            </div>
        </div>
    )
}

export default Footer