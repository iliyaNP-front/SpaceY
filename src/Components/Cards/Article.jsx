import LastestArt from "../HomeSections/LastestArt"
import { Link } from "react-router-dom"
function Article({title, description, url, id}){
    return(
            <div className="Article" style={{flexDirection:(id % 2===1? "row": "row-reverse")}}>
                <img className="Art-img"src={url} alt="BlackHole" />
                <div className="Art-des">
                    <h2 className="Art-Title">{title}</h2>
                    <p className="Art-paragraph">
                        {description}
                    </p>
                    <Link className="Article-link" to={`/${title}`}>Learn more</Link>
                </div>
            </div>
    )
}

export default Article