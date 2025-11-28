import Header from "../Header"
import Footer from "../Footer"
function BlackHolePage(){
    return(
        <div className="BlackHolePage">
            <div className="BlackHolePage-Header">
                <div className="BlackHolePage-Header-Wrapper">
                    <Header/>
                    <h1 className="BlackHolePage-Title">Black holes</h1>
                </div>
            </div>
            <div className="BlackHolePage-Content">
                <div className="BlackHolePage-Content-Intro">
                    <h1 className="BlackHolePage-Content-Intro-Title">Where Gravity Rules</h1>
                    <p className="BlackHolePage-Content-Intro-Paragraph">
                        In the vastness of space, there exist regions so extreme that not even light can escape their pull. These are black holes—the most mysterious objects in the universe. Born from the death of massive stars, they are invisible, yet their presence bends light, warps time, and reshapes entire galaxies. To study a black hole is to step to the very edge of physics, where the known laws of reality begin to break down.
                    </p>
                </div>
                <div className="BlackHolePage-Content-part1">
                    <h1 className="BlackHolePage-Content-part1-Title">The Birth of a Black Hole</h1>
                    <p className="BlackHolePage-Content-part1-Paragraph">
                        Black holes are born from the death of the universe’s giants—massive stars far larger than our Sun. Throughout their lives, these stars burn brightly, fusing hydrogen into heavier elements deep in their cores. But when their fuel is exhausted, gravity takes over, and the star can no longer resist its own weight. The core collapses in a sudden, catastrophic implosion, while the outer layers may explode outward as a brilliant supernova. What remains is a region of infinite density—a singularity—where gravity is so strong that nothing, not even light, can escape. From the ashes of a dying star, a black hole emerges.
                    </p>
                </div>
                <div className="BlackHolePage-Content-part2">
                    <h1 className="BlackHolePage-Content-part2-Title">The Anatomy of a Black Hole</h1>
                    <p className="BlackHolePage-Content-part2-Paragraph">
                        Though black holes are invisible, scientists describe their structure through the way they affect matter and light around them. At the very center lies the singularity, a point of infinite density where the known laws of physics break down. Surrounding it is the event horizon—the invisible boundary marking the point of no return. Anything crossing this threshold, whether star, gas, or even light itself, is lost forever to the black hole’s pull.
                    </p>
                    <p className="BlackHolePage-Content-part2-Paragraph">
                        Outside the event horizon, a hot accretion disk often forms, created by gas and dust spiraling inward. This material moves so fast and heats up so intensely that it glows brighter than entire galaxies, releasing enormous amounts of energy before vanishing into the darkness. Some black holes also generate relativistic jets, powerful streams of particles that shoot out at nearly the speed of light, stretching for thousands of light-years across space.
                    </p>
                </div>
                <div className="BlackHolePage-Content-part3">
                    <h1 className="BlackHolePage-Content-part3-Title">The Anatomy of a Black Hole</h1>
                    <p className="BlackHolePage-Content-part3-Paragraph">
                        Black holes come in several forms, each with unique characteristics. <strong style={{textDecoration:"underline"}}>Stellar-mass black holes</strong> are the most common, formed from the collapse of individual massive stars. They typically weigh between a few and tens of times the Sun’s mass. At the other extreme are supermassive black holes, found at the centers of galaxies, including our Milky Way. These giants can contain millions or even billions of times the mass of the Sun, influencing the motion of entire star systems and shaping the evolution of their galaxies.
                    </p>
                    <p className="BlackHolePage-Content-part3-Paragraph">
                        Scientists also theorize the existence of <strong style={{textDecoration:"underline"}}>primordial black holes</strong>, formed not from stars but from extreme conditions in the early universe. Though still hypothetical, these black holes could be very small or extremely massive, offering clues about the universe’s first moments. Each type, from the smallest to the largest, demonstrates the astonishing power of gravity and the remarkable extremes of our cosmos.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BlackHolePage