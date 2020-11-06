import React from 'react'
import {Slide} from 'react-awesome-reveal'

const Subscribe = () => {
    return (
        <div id="subscribe" className="position-relative light-bg py-5">
            <div className="container-fluid d-flex flex-row flex-wrap justify-content-around">
                <div className="w-50">
                    <Slide triggerOnce>
                    <h2>Subscribe to the best food newsletter</h2>
                    </Slide>
                    <Slide triggerOnce>
                    <p className="lead">
                        Velit in est nisi ut magna tempor aliquip mollit. Proident sunt enim ex laboris anim excepteur eiusmod enim nostrud enim.
                    </p>
                    </Slide>
                </div>
                <form>
                    <div className="d-flex flex-row mt-3">
                        <Slide triggerOnce direction="right">
                            <input className="form-control mr-2" type="email" placeholder="Email" required/>
                            <button className="btn btn-secondary">Subscribe</button>
                        </Slide>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
