import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className="sticky mt-5 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                    <p className="lead">Copyright &copy; Simple Food, 2020</p>
                </div>
                <div className="d-flex flex-row">
                    <a className="px-3" href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="px-3" href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="px-3" href="#">
                        <i className="fab fa-snapchat"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
