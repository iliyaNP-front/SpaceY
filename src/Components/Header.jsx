import { Link } from "react-router-dom"
import { useEffect } from "react";

function Header(){
  useEffect(() => {
    const links = document.querySelector(".Lists");
    const logo = document.querySelector(".Logo");


    links.addEventListener("mouseover", handleMouseOver);
    links.addEventListener("mouseout", handleMouseOut);

    function handleMouseOver(e) {
      if (e.target.classList.contains("list")) {
        const link = e.target;
        const siblings = link.closest(".Lists").querySelectorAll(".list");
        link.style.color = "white"
        siblings.forEach(el => {
          if (el !== link) el.style.opacity = 0.1;
        });
        logo.style.opacity = 0.1;
      }
    }

    function handleMouseOut(e) {
      if (e.target.classList.contains("list")) {
        const link = e.target;
        const siblings = link.closest(".Lists").querySelectorAll(".list");
        link.style.color = "rgb(153, 153, 153)"
        siblings.forEach(el => {
          if (el !== link) el.style.opacity = 1;
        });
        logo.style.opacity = 1;
      }
    }

    return () => {
      links.removeEventListener("mouseover", handleMouseOver);
      links.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

    return(
        <div className="Header">
            <h1 className="Logo">SpaceY</h1>
            <ul className="Lists">
                <Link className="list" to="/">Home</Link>
                <Link className="list" to="/Planets">Planets</Link>
                <Link className="list" to="/News">News</Link>
            </ul>
        </div>
    )
}

export default Header