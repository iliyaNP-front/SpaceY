
function FirstTime(){
    return(
        <div className="Section3">
            <div className="Section3-Div-Title">
                <h1 className="Section3-Title">First Step</h1>
            </div>
            <div className="Section3-firstContent">
                <div className="Section3-firstContent-descption">
                    <h2 className="Section3-firstContent-Title">How did it all start?</h2>
                    <p className="Section3-firstContent-Paragraph">
                        The idea of traveling to the Moon began during the Space Race in the mid-20th century. After the Soviet Union launched Sputnik in 1957 and later sent the first human, Yuri Gagarin, into space in 1961, the United States felt pressure to achieve something even greater. In response, U.S. President <strong style={{textDecoration:"underline", cursor:"pointer"}}>John F. Kennedy</strong> announced in May 1961 that America would send astronauts to the Moon and bring them safely back before the decade ended. This bold vision became the foundation of the Apollo program, turning the dream of reaching the Moon into a clear national goal.
                    </p>
                </div>
                <div className="Section3-firstContent-img">
                    <img src="../../public/MoonSpeach.jpg" alt="" />
                    <div style={{paddingRight:"5px"}}>
                        <h3 className="Section3-firstContent-Name">John F. Kennedy</h3>
                        <p className="Section3-firstContent-Date">May 25, 1961</p>
                    </div> 
                </div>
            </div>
            <div className="Section3-SecondContent">
                <div className="Section3-SecondContent-descption">
                    <h2 className="Section3-SecondContent-Title">The Birth of Apollo</h2>
                    <p className="Section3-SecondContent-Paragraph">
                        Following Kennedy’s speech, NASA began the massive task of creating the technology needed for a Moon mission. The program was named Apollo, and it required the development of powerful new rockets, advanced spacecraft, and complex systems to keep astronauts alive in space. Engineers designed the Saturn V rocket, the largest and most powerful rocket ever built, to carry astronauts beyond Earth’s orbit. At the same time, training programs prepared astronauts for the dangerous journey, including practicing spacewalks, navigation, and landing procedures. Step by step, the Apollo program turned Kennedy’s challenge into a real, achievable mission.
                    </p>
                </div>
                <div className="Section3-SecondContent-img">
                    <div>
                        <img src="../../public/NasaLogo.png" alt="" />
                    </div> 
                </div>
            </div>
            <div className="Section3-ThirdContent">
                <h2 className="Section3-ThirdContent-Title">Steps Before the Giant Leap</h2>
                <p className="Section3-ThirdContent-Paragraph">
                    Before attempting a Moon landing, NASA carried out a series of test missions to ensure the safety and success of Apollo. Missions like Apollo 7 tested the Command Module in Earth’s orbit, while Apollo 8 became the first crewed spacecraft to orbit the Moon in 1968, proving humans could travel that far and return safely. Then Apollo 9 tested the Lunar Module in Earth’s orbit, and Apollo 10 rehearsed almost the entire landing, flying close to the Moon’s surface without actually touching down. Each mission built confidence and gathered the experience needed, step by step, until NASA was ready for the ultimate goal — landing astronauts on the Moon.
                </p>
            </div>
        </div>
    )
}

export default FirstTime