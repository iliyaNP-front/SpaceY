import { Link } from "react-router-dom"

function HowEveryThingStart(){
    return (
        <div className="HowEveryThingStart">
            <div className="HowEveryThingStart-Wrapper">
                <h1 className="HowEveryThingStart-Title">HowEveryThingsStart</h1>
                <p className="HowEveryThingStart-Paragraph">
                    In the beginning, there was only emptiness, a silent void that suddenly burst into motion—forming light, matter, and the first seeds of creation. From swirling stars to the birth of Earth, and from oceans to the first living spark, everything we know traces back to this moment. This is just the start of a story that unfolds across billions of years…
                </p>
                <div>
                    <Link className="HowEveryThingStart-Link" to="/HowItAllBegan">Learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default HowEveryThingStart