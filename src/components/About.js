import React from 'react'
import {Bounce, Slide} from 'react-awesome-reveal'

const About = () => {
    return (
        <div id="about" className="position-relative py-5">
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-lg-6 order-lg-1 order-sm-2">
                        <Bounce triggerOnce>
                            <img width="50%" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some random" className="img-fluid d-block mx-auto"/>
                        </Bounce>
                    </div>
                    <div className="col-lg-6 order-sm-1 my-auto about-text">
                        <Slide triggerOnce direction="right">
                            <h2>Hi I'm Brad</h2>
                            <p className="lead muted">Creator of Simple Food</p>
                            <p className="pr-5">Labore laborum excepteur tempor consequat nostrud mollit sint veniam est ut id officia id incididunt. Do voluptate occaecat amet ut.Magna ad exercitation nisi minim aute et. Cillum nisi proident proident exercitation ea amet do nostrud adipisicing et fugiat ea.</p>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
