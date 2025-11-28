import { Link } from "react-router-dom"

function Topics(){
    return(
        <div className="Topics">
            <h1 className="Topics-Title">Welcome to the Universe</h1>
            <div className="Topics-Container">
                <Link to="/Galaxies">
                    <div className="Topic Topic-Galaxy">
                        <h2 className="Topic-Title">Galaxy</h2>
                    </div>
                </Link>
                
                <div className="Topic Topic-Stars">
                    <h2 className="Topic-Title">Stars</h2>
                </div>
                <div className="Topic Topic-Missions">
                    <h2 className="Topic-Title" style={{color:"#0000006f"}}>Misson</h2>
                </div>
                <div className="Topic Topic-Nebules">
                    <h2 className="Topic-Title">Nebula</h2>
                </div>
            </div>
        </div>
    )
}

export default Topics