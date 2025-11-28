import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import GalaxyPages from "./TopicsPages/GalaxyPage"

function Galaxy(){
    const {id} = useParams();

    const Galaxy = {
        1: {
            title: "Milky Way",
            paragraph: "The Milky Way Galaxy is a vast barred spiral galaxy that serves as our cosmic home, stretching about 100,000 light-years across and containing over 100 billion stars, along with immense amounts of gas, dust, and dark matter. Our Solar System is located in one of its spiral arms, the Orion Arm, roughly 27,000 light-years from the galactic center, which harbors a supermassive black hole known as Sagittarius A*. The Milky Way is part of the Local Group of galaxies, bound together with Andromeda, the Triangulum Galaxy, and dozens of dwarf galaxies. Constantly evolving through star formation and galactic interactions, it will one day merge with Andromeda, reshaping both galaxies into a new, larger system.",
            Link: "../public/milkywayback.jpg"
        },
        2: {
            title: "Andromeda",
            paragraph: "The Andromeda Galaxy (M31) is the largest galaxy in the Local Group and the closest spiral galaxy to the Milky Way, lying about 2.5 million light-years away from Earth. Spanning roughly 220,000 light-years across, it is home to around one trillion stars, making it nearly twice as large as the Milky Way. Andromeda has a bright central bulge, sweeping spiral arms, and several smaller companion galaxies, including M32 and M110. At its core lies a supermassive black hole, similar to our galaxy’s center. Scientists study Andromeda not only because of its size and proximity but also because it is on a slow collision course with the Milky Way; in about 4 billion years, the two galaxies are expected to merge, forming a massive elliptical or disk-shaped galaxy.",
            Link: "../public/AndromedaGalaxy.jpg"
        },
        3: {
            title: "Triangulum",
            paragraph: "The Triangulum Galaxy (M33) is the third-largest member of the Local Group of galaxies, after the Andromeda Galaxy and the Milky Way. Located about 3 million light-years from Earth in the constellation Triangulum, it spans around 60,000 light-years across, making it much smaller than its two neighbors but still impressive in scale. Triangulum is a spiral galaxy without a central bar, known for its loosely wound spiral arms and vibrant star-forming regions, especially the massive nebula NGC 604, one of the largest stellar nurseries known. Containing tens of billions of stars, gas, and dust, it plays a key role in helping astronomers understand how smaller galaxies evolve and interact within the Local Group.",
            Link: "../public/TriangulumGalaxy.jpg"
        },
        4: {
            title: "Whirlpool",
            paragraph: "The Whirlpool Galaxy (M51) is a striking spiral galaxy located about 27 million light-years away in the constellation Canes Venatici. Famous for its grand design, it has well-defined spiral arms filled with bright young stars, dust lanes, and star-forming regions that make it one of the most photogenic galaxies in the sky. Spanning roughly 76,000 light-years across, the Whirlpool is interacting with a smaller companion galaxy, NGC 5195, which is tugging on its spiral arms and triggering waves of new star formation. This galactic encounter gives the Whirlpool its distinctive shape and makes it an important subject for studying the effects of gravitational interaction between galaxies.",
            Link: "../public/WhirlpoolGalaxy.jpg"
        },
        5: {
            title: "Pinwheel",
            paragraph: "The Pinwheel Galaxy (M101) is a large face-on spiral galaxy located about 21 million light-years away in the constellation Ursa Major. With a diameter of nearly 170,000 light-years, it is almost twice the size of the Milky Way and contains around one trillion stars. Its striking spiral structure features wide, well-defined arms rich in star-forming regions, glowing nebulae, and clusters of young, hot stars. The Pinwheel is also notable for hosting several supernovae observed in recent decades, making it an important galaxy for studying stellar evolution and cosmic explosions. Its bright, symmetrical appearance and enormous scale have made it one of the most famous spiral galaxies in the night sky.",
            Link: "../public/PinwheelGalaxy.jpg"
        },
        6: {
            title: "Cartwheel",
            paragraph: "The Cartwheel Galaxy is a rare ring galaxy located about 500 million light-years away in the constellation Sculptor. It spans roughly 150,000 light-years across and is famous for its striking wheel-like shape, which formed after a smaller galaxy collided with it, creating rippling waves of star formation that spread outward like ripples in water. Its bright outer ring is filled with massive young stars and glowing nebulae, while the central region contains older stars and remnants of the galactic core. The Cartwheel’s unusual appearance makes it a prime subject for studying how galactic collisions transform galaxies over time, offering a glimpse into the dynamic and sometimes violent processes that shape the universe.",
            Link: "../public/cartwheel.jpg"
        },
        7: {
            title: "Black Eye",
            paragraph: "The Black Eye Galaxy (M64) is a spiral galaxy located about 17 million light-years away in the constellation Coma Berenices. It is easily recognized by the dark band of dust that partially obscures its bright core, giving it the appearance of a cosmic 'black eye'. Spanning roughly 54,000 light-years across, M64 contains billions of stars along with vast regions of gas and dust. What makes it especially intriguing is the discovery that its inner and outer regions of gas rotate in opposite directions—likely the result of a past merger with a smaller galaxy. This unusual feature, along with its striking dark dust lane, makes the Black Eye Galaxy both visually stunning and scientifically important in the study of galactic dynamics.",
            Link: "../public/BlackEyeGalaxy.webp"
        },
        8: {
            title: "Cigar Galaxy",
            paragraph: "The Cigar Galaxy (M82) is a starburst galaxy located about 12 million light-years away in the constellation Ursa Major. Shaped like a cigar due to its elongated form, it spans about 37,000 light-years across—smaller than the Milky Way but far more active. Intense gravitational interactions with its nearby neighbor, the Bode’s Galaxy (M81), have triggered rapid star formation within M82, making it one of the brightest infrared galaxies in the sky. Powerful stellar winds and supernova explosions drive huge streams of gas out of its core, creating dramatic plumes that extend thousands of light-years into space. This combination of vigorous star birth and energetic outflows makes the Cigar Galaxy a key object for studying how galaxies evolve under gravitational influence.",
            Link: "../public/CigarGalaxy.webp"
        },
        9: {
            title: "Sombrero",
            paragraph: "The Sombrero Galaxy (M104) is a stunning spiral galaxy located about 29 million light-years away in the constellation Virgo. Measuring around 50,000 light-years across, it is smaller than the Milky Way but easily recognized by its bright central bulge and prominent dark dust lane that gives it the appearance of a wide-brimmed sombrero hat. The galaxy’s core is exceptionally luminous, powered by a supermassive black hole containing billions of solar masses. Its striking structure and brilliant halo of stars make it one of the most photographed and studied galaxies in the night sky. The Sombrero Galaxy is an important target for astronomers seeking to understand the role of black holes and star formation in galactic evolution.",
            Link: "../public/Sombrero.webp"
        }
    }

    const Galaxies = Galaxy[id]

    if(!Galaxies) return <h2>Galaxy not found</h2>


    return(
        <div className="Galaxy">
            <Header/>
            <div className="Galaxy-Content">
                <div className="Galaxy-Content-Title">
                    <div>
                        <h1 className="Galaxy-Content-h1">{Galaxies.title}</h1>
                        <p className="Galaxy-Content-paragraph">
                            {Galaxies.paragraph}
                        </p>
                    </div>
                    
                    <img className="Galaxy-Content-img" src={Galaxies.Link} alt="" />
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Galaxy