import { useEffect } from "react";
import { Link } from "react-router-dom"

function Nebulas(){

    let open = false;

    useEffect(()=>{
        const desc = document.querySelector('.Section2Description');
        const descButton = document.querySelector('.Section2Description-Button');

        descButton.addEventListener("click", () => {
        if (!open) {
            desc.style.opacity = 1;
            desc.classList.add("Section2Description-active");
            descButton.textContent = "Close";
            open = true;
        } else {
            desc.style.opacity = 0;
            descButton.textContent = "Description";
            open = false;
        }
        });
    },[])



    return(
        <div className="Section2">
            <h1 className="Section2Title">Sombrero Galaxy</h1>
            <div className="Section2Description">
                <div className="Section2Description-Div-T-C">
                    <h2 className="Section2Description-Title">Sombrero Galaxy</h2>
                </div>
                <p className="Section2Paragraph">
                    The Sombrero Galaxy, also known as Messier 104 (M104), is a stunning spiral galaxy located about 31 million light-years away in the constellation Virgo. It gets its name from its distinctive appearance, which resembles a wide-brimmed Mexican sombrero hat when viewed through a telescope. The galaxy features a bright, bulging core surrounded by a large, flat disk of stars and dust, highlighted by a prominent dark dust lane that sharply outlines its structure. Containing billions of stars and a supermassive black hole at its center, the Sombrero Galaxy is one of the most massive objects in the nearby universe, making it a favorite subject for both astronomers and sky watchers.
                </p>
                <Link to="/Galaxy/9" className="Section2Link">Learn more</Link>
            </div>
            <button  className="Section2Description-Button">Description</button>
        </div>
    )
}

export default Nebulas