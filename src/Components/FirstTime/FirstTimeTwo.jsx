import { useEffect } from "react"
import { Link } from "react-router-dom"

function FirstTimeTwo(){

    useEffect(()=>{
        const MoonOpenButton = document.querySelector(".Moon3dModelButton")
        const MoonMainDiv = document.querySelector(".Moon3dModel")
        const MoonCloseDiv = document.querySelector(".Moon3dModelClose")

        MoonOpenButton.addEventListener("click", ()=>{
            MoonMainDiv.style.display = "flex"
            setTimeout(()=>{
                MoonMainDiv.style.opacity = "1"
            },500)
        })

        MoonCloseDiv.addEventListener("click", ()=>{
            MoonMainDiv.style.opacity = "0"
            setTimeout(()=>{
                MoonMainDiv.style.display = "none"
            },500)
        })
    },[])

    

    return(
        <>
            <div className="Section3-part2">
                <h1 className="Section3-part2-Title">Apollo 11: The First Moon Landing</h1>
                <div className="section3-part2-description">
                    <p className="section3-part2-Paragraph">
                        On July 16, 1969, the Apollo 11 mission lifted off from Kennedy Space Center in Florida, carrying astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins aboard the Saturn V rocket. After a three-day journey through space, the crew entered lunar orbit. On July 20, Armstrong and Aldrin transferred into the Lunar Module, named Eagle, and began their descent toward the surface while Collins stayed behind in the Command Module, Columbia. The landing was tense — fuel was running low and Armstrong had to take manual control to avoid a rocky area — but at 20:17 UTC, he safely touched down with the famous words: “The Eagle has landed.”

                        A few hours later, Armstrong became the first human to step onto the Moon, declaring: “That’s one small step for [a] man, one giant leap for mankind.” Aldrin soon joined him, and together they spent about 21 hours on the lunar surface. They planted the American flag, spoke to President Richard Nixon by phone from the White House, set up scientific instruments, and collected 47.5 pounds (21.5 kg) of lunar rocks and soil. Meanwhile, Collins orbited the Moon alone, ensuring their safe return. On July 24, 1969, Apollo 11 splashed down in the Pacific Ocean, completing a mission watched by an estimated 600 million people worldwide — the largest television audience in history at the time. It was not only a triumph of science and engineering but also a unifying achievement for all humanity.
                    </p>
                    <div className="section3-part2-img">
                        <img src="../public/apollo-11.jpg" alt="" />
                    </div>
                </div>
                <div className="FirstHuman">
                    <div className="FirstHuman-img">
                        <img src="../public/firsthuman.png" alt="" />
                    </div>
                    <div className="FirstHuman-desc">
                        <h2 className="FirstHuman-Name">Neil Armstrong</h2>
                        <p className="FirstHuman-Nickname">First Man on the Moon</p>
                        <p className="FirstHuman-Paragraph">
                            Neil Armstrong was born on August 5, 1930, in Wapakoneta, Ohio, USA. From a young age, he was fascinated by flying and earned his pilot’s license at just 16, even before getting his driver’s license. He became a naval aviator, flying combat missions during the Korean War, and later studied aerospace engineering. In 1962, Armstrong joined NASA’s astronaut program, where his calm, precise nature made him an ideal pilot for risky missions. On July 20, 1969, he became the first human to walk on the Moon during Apollo 11, forever marking his place in history. After leaving NASA, he worked as a professor and stayed mostly out of the spotlight. He passed away on August 25, 2012, remembered as a humble hero who carried humanity’s dream to the Moon.
                        </p>
                    </div>
                </div>
            </div>  
            <div className="FirstStep">
                <div className="FirstStep-img">
                    <img src="../public/firstStep.webp" alt="" />
                </div>
                <div className="FirstStep-Desc">
                    <h2 className="FirstStep-Title">A Step into History</h2>
                    <p className="FirstStep-Paragraph">
                        The first step on the Moon was more than just a footprint in the dust; it was a symbol of human curiosity, courage, and the will to explore beyond our world. That moment showed that dreams once thought impossible could become reality among the stars. <Link className="FirstStep-Link">Learn more</Link>
                    </p>
                </div>
                <div className="Moon3dModelMainDiv">
                    <button className="Moon3dModelButton">The Moon in Your Hands</button>
                    <div className="Moon3dModel">
                        <iframe title="The Moon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="900" height="780" src="https://sketchfab.com/models/9916fcec59f04b07b3e8d7f077dc3ded/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"> </iframe>
                        <div className="Moon3dModelCloseDiv">
                            <p className="Moon3dModelClose">close</p>
                        </div>
                    </div>
                </div>
            </div>      
        </>

    )
}

export default FirstTimeTwo