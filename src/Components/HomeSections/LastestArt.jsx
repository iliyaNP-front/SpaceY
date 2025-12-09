import { Link } from "react-router-dom"
import Article from "../Cards/Article"

function LastestArt(){

    const Articles = [
        {
            id: 1,
            Title: "BlackHole",
            img: "../BlackHole.png",         
            paragraph: "A black hole is a region in space where gravity is so strong that nothing—not even light—can escape its pull. It forms when a massive star collapses under its own gravity, squeezing a large amount of matter into an incredibly small space. At the center lies the singularity, a point of infinite density, surrounded by the event horizon, the boundary beyond which nothing can return. Black holes can grow by pulling in surrounding matter or merging with other black holes, and while they are invisible, scientists detect them by observing the effects of their immense gravity on nearby stars and gas."
        },
        {
            id: 2,
            Title: "FirstTime",
            img: "../Moon.png",
            paragraph: "The first mission to the Moon was more than just a flight—it was a daring leap into the unknown. Engineers, astronauts, and dreamers worked together to achieve what once seemed impossible: sending humans beyond Earth and onto another world. This historic journey changed space exploration forever…The first mission to the Moon marked a turning point in human history, proving that imagination and determination could carry us beyond our own world. With powerful rockets, daring astronauts, and groundbreaking technology, humanity took its first steps into the vast unknown of space. What began as a bold dream became a reality that inspired generations…",
        },
        {
            id: 3,
            Title: "Mars",
            img: "../Mars.png",
            paragraph: "Mars, often called the “Red Planet,” is the fourth planet from the Sun and Earth’s closest neighbor in many ways. Its reddish color comes from iron oxide, or rust, covering its surface. Mars is smaller than Earth, with about half its diameter, and has a thin atmosphere mostly made of carbon dioxide, which makes it cold and unable to support liquid water on the surface for long periods. Despite this, evidence shows that rivers, lakes, and even oceans once existed there, raising the possibility that Mars may have supported life in the past. The planet has towering volcanoes like Olympus Mons, the largest in the solar system, and a massive canyon system, Valles Marineris, that dwarfs Earth’s Grand Canyon. Mars also has two small moons, Phobos and Deimos, and has been a prime target for robotic missions seeking to understand its history and potential for future human exploration."
        }
    ]
    console.log(Articles[0].Title)
    return(
        <div className="Section1">
            <Link className="Title">Lastest Article</Link>
            <div className="Articles">
                {Articles.map((article) => (
                    <Article
                        id={article.id}
                        title={article.Title} 
                        description={article.paragraph} 
                        url={article.img} 
                        key={article.id}
                    />
                ))}
            </div>
        </div>
    )

}

export default LastestArt