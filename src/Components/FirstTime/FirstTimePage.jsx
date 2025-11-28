import FirstTime from "./FirstTime"
import FirstTimeTwo from "./FirstTimeTwo"
import Header from "../Header"
import Home from "../Home"
import { useEffect } from "react"
import Footer from "../Footer"
function FirstTimePage(){
    useEffect(()=>{
        const header = document.querySelector(".Header")
        console.log(header)
        const Sticky = function(enteries){
            const [entry] = enteries;

            if(!entry.isIntersection) header.classList.add("stickyHead")
            else header.classList.remove("stickyHead")
        }

        const HeaderObserver = new IntersectionObserver(Sticky,{
            root: null,
            threshold: 0
        })
        HeaderObserver.observe(header)
    },[])
    
    return( 
        <div className="FirstTimePage">
            <Header/>
            <div className="section">
                <FirstTime/>
            </div>
            <div className="section">
                <FirstTimeTwo/>
            </div>
            <Footer/>
        </div>     
    )
}

export default FirstTimePage