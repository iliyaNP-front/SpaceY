import Footer from "../Footer"
import Header from "../Header"
import { Link } from "react-router-dom"

function GalaxyPages(){

    const Galaxies = [
        {
            id: 1,
            Title: "Milky Way",
            Image: "../public/milkywayback.jpg"
        },
        {
            id: 2,
            Title: "Andromeda",
            Image: "../public/AndromedaGalaxy.jpg"
        },
        {
            id: 3,
            Title: "Triangulum",
            Image: "../public/TriangulumGalaxy.jpg"
        },
        {
            id: 4,
            Title: "Whirlpool",
            Image: "../public/WhirlpoolGalaxy.jpg"
        },
        {
            id: 5,
            Title: "Pinwheel",
            Image: "../public/PinwheelGalaxy.jpg"
        },
        {
            id: 6,
            Title: "Cartwheel",
            Image: "../public/cartwheel.jpg"
        },
        {
            id: 7,
            Title: "Black Eye",
            Image: "../public/BlackEyeGalaxy.webp"
        },
        {
            id: 8,
            Title: "Cigar Galaxy",
            Image: "../public/CigarGalaxy.webp"
        },
        
    ]

    return(
        <div className="GalaxyPages">
            <div className="GalaxyPagesHeader">
                <Header/>
                <h1 className="GalaxyPagesTitle">The Galaxy</h1>
            </div>
            <div className="GalaxyPagesContent">
                <div className="GalaxyPagesContent-intro">
                    <h2 className="GalaxyPagesContent-intro-title">Understanding Galaxies</h2>
                    <p className="GalaxyPagesContent-intro-paragraph">
                        A galaxy is a large-scale system composed of stars, stellar remnants, interstellar gas, dust, and dark matter, all bound together by gravitational forces. Galaxies vary greatly in size, from dwarf galaxies containing a few billion stars to giant galaxies with several trillion. They are classified into main types such as spiral, elliptical, and irregular, based on their structure and appearance. The Milky Way, our home galaxy, is a barred spiral galaxy that contains over 100 billion stars, along with planetary systems, nebulae, and star clusters.
                    </p>
                </div>
                <div className="GalaxyPagesContent-Galaxies">
                    <h2 className="GalaxyPagesContent-Galaxies-title">Galaxies</h2>
                    <div className="GalaxyPagesContent-Galaxies-Div">
                        {Galaxies.map(Galaxies =>(
                                <div key={Galaxies.id} className="GalaxyPagesContent-Galaxies-Cards" style={{backgroundImage: `url(${Galaxies.Image})`}}>
                                    <h2 className="GalaxyPagesContent-Galaxies-Cards-Title">{Galaxies.Title}</h2>
                                    <Link className="GalaxyPagesContent-Galaxies-Cards-Link" to={`/Galaxy/${Galaxies.id}`}>Learn More</Link>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default GalaxyPages