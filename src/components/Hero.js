import React from 'react'
import {Slide} from 'react-awesome-reveal'

const Hero = () => {
    return (
        <div id="hero" className="hero-section container-fluid position-relative" style={{height: "400px"}}>
            <div className="hero-text position-absolute">
                <Slide>
                    <h2 className="mb-lg-4">In occaecat enim in consectetur veniam dolore.</h2>
                    <p className="lead mb-lg-4">Est aute enim do cupidatat ex culpa cillum qui. Fugiat ad in esse amet commodo.</p>
                    <button className="btn btn-primary">See recipes</button>
                </Slide>
            </div>
        </div>
    )
}

export default Hero
