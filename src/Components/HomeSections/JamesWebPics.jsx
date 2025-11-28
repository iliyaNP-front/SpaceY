import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {Link} from "react-router-dom"

function JamesWebPics(){

    const JamesWebPictures = [
        {   
            id: 1,
            Title: "Stellar Jet in Sh2-284",
            description: "NASA's James Webb Space Telescope recently imaged an extremely large and symmetric protostellar jet at the outskirts of our Milky Way galaxy in the forming cluster Sh2-284. From tip to tip, this protostellar jet is 8 light-years across, about double the distance from our Sun to its closest neighboring star system, Alpha Centauri.",
            PicsLink: "../public/JamesWebb1.jpg",
        },
        {   
            id: 2,
            Title: "Trappist-1 e",
            description: "The Earth-size exoplanet TRAPPIST-1 e, depicted at the lower right, is silhouetted as it passes in front of its flaring host star in this artist’s concept of the TRAPPIST-1 system. Scientists call this event a transit, when valuable data can be gathered as the exoplanet passes between the star and the telescope and starlight illuminates the atmosphere, if one is present. NASA’s James Webb Space Telescope has made initial observations of planets b, c, d, and e during their transits, with additional observations of planet e underway. While the star’s frequent flares make it difficult to detect an atmosphere, each transit builds up more and more information for scientists to get a more complete picture of these distant worlds. ",
            PicsLink: "../public/JamesWebb2.jpg",
        },
        {   
            id: 3,
            Title: "NGC 6072",
            description: "NASA’s James Webb Space Telescope’s view of planetary nebula NGC 6072 in the near-infrared shows a complex scene of multiple outflows expanding out at different angles from a dying star at the center of the scene.",
            PicsLink: "../public/JamesWebb3.jpg",
        },
        {   
            id: 4,
            Title: "Cat’s Paw Nebula",
            description: "To celebrate NASA’s James Webb Space Telescope’s third year of highly productive science, astronomers used the telescope to scratch beyond the surface of the Cat’s Paw Nebula (NGC 6334), a massive, local star-forming region. This area is of great interest to scientists, having been subject to previous study by NASA’s Hubble and retired Spitzer space telescopes, as they seek to understand the multiple steps required for a turbulent molecular cloud to transition to stars.",
            PicsLink: "../public/JamesWebb4.jpg",
        },
        {   
            id: 5,
            Title: "Sombrero Galaxy",
            description: "NASA’s James Webb Space Telescope recently imaged the Sombrero galaxy with its NIRCam (Near-Infrared Camera), which shows dust from the galaxy’s outer ring blocking stellar light from stars within the galaxy. In the central region of the galaxy, the roughly 2,000 globular clusters, or collections of hundreds of thousands of old stars held together by gravity, glow in the near-infrared.",
            PicsLink: "../public/JamesWebb5.jpg",
        },
    ]

    

    useEffect(()=>{
        const Slides = document.querySelectorAll(".JamesPic")
        const RightButton = document.querySelector('.Slider-Right')
        const leftButton = document.querySelector('.Slider-left')
        let curSlide = 0
        const maxSlide = Slides.length - 1
        console.log(maxSlide)
        const goToSlide = function(slide){
            Slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
        }

        goToSlide(0)

        const nextSlide = function(){
        if(curSlide === maxSlide){
            curSlide = 0
        }else{
            curSlide ++
        }
        
        goToSlide(curSlide)
        }

        const prevSlide = function(){
        if(curSlide === 0){
            curSlide = maxSlide
        }else{
            curSlide --
        }
        
        goToSlide(curSlide)
        }

        RightButton.addEventListener('click', nextSlide)
        leftButton.addEventListener('click', prevSlide)


        setInterval(()=>{
            if(curSlide === maxSlide){
                curSlide = 0
            }else{
                curSlide++
            }
            goToSlide(curSlide)
        }, 5000)

    },[])


    return(
        <div className="JamesWebPics">
            <div className="JamesWebPics-Title-Buttons">
                <h1 className="JamesWebPics-Title"><Link to="/" className="JameWebbLink">James Webb</Link>'s latest picturs</h1>
            </div>
            <div className="JamesWebPics-Main">
                <div className="JamesWebPics-Buttons">
                    <button className="Slider-Buttons Slider-left"><FontAwesomeIcon icon={faArrowLeft} size="2x" /></button>
                    <button className="Slider-Buttons Slider-Right"><FontAwesomeIcon icon={faArrowRight} size="2x" /></button>
                </div>
                
                <div className="JamesWebPics-Content">
                    {JamesWebPictures.map((JamesWebPicture) => (
                            <div key={JamesWebPicture.id} className="JamesPic" style={{backgroundImage: `url(${JamesWebPicture.PicsLink})`, transform: `translateX(${100 * JamesWebPicture.id}%)`}} >
                                <div className="JamesPic-Wrapper">
                                    <h1 className="JamesPic-Title">{JamesWebPicture.Title}</h1>
                                    <p className="JamesPic-Desc">{JamesWebPicture.description}</p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default JamesWebPics