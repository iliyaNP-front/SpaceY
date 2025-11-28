import Header from "./Header"
import "../Home.css"
import LastestArt from "./HomeSections/LastestArt"
import { useEffect } from "react"
import Nebulas from "./HomeSections/Nebulas"
import Topics from "./HomeSections/Topics"
import HowEveryThingStart from "./HomeSections/HowEveryThingStart"
import Footer from "./Footer"
import JamesWebPics from "./HomeSections/JamesWebPics"

function Home(){

    useEffect(()=>{

        const headSection = document.querySelector(".HeadSection")
        const header = document.querySelector(".Header")
        const Sticky = function(enteries){
            const [entry] = enteries

            if(!entry.isIntersecting) header.classList.add("stickyHead")
            else header.classList.remove("stickyHead")
        }
        
        const HeaderObserver = new IntersectionObserver(Sticky, {
            root: null,
            threshold: 0
        })
        HeaderObserver.observe(headSection)

        const AllSections = document.querySelectorAll(".section")

        const revealSection = function(enteries, observer){
            const [entry] = enteries

            if(!entry.isIntersecting) return
            entry.target.classList.remove('section--hidden')
        }

        const SectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.15
        })
        AllSections.forEach(function(secton){
            SectionObserver.observe(secton)
            secton.classList.add("section--hidden")
        })

    },[])

    return(
        <div className="HomePage">
            <div className="HeadSection" id="HeadSec">
                <div className="Wrapper">
                    <Header/>
                    <div className="Headpart">
                        <h1 className="Headparagraph">Discover the science behind the stars.</h1>
                    </div>
                </div>
            </div>
            <div className="Sections">
                <div className="section">
                    <Topics/>
                </div>
                <div className="section">
                    <LastestArt/>
                </div>
                <div className="section">
                    <JamesWebPics/>
                </div>
                <div className="section">
                    <Nebulas/>
                </div>
                <div className="section">
                    <HowEveryThingStart/>
                </div>
            </div> 
            <Footer/>
        </div>

        
    )
}

export default Home