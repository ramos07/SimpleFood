import React from 'react'

const RecipeRecommendations = () => {
    return (
        <div className="row d-flex flex-row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-5 mx-3">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some entree" className="card-img-top"/>
                    <p className="h6 card-subtitle mt-3">Recipes-Salad</p>
                    <h5 className="card-title mt-3">Caesar Salad</h5>
                    <p className="card-text">45 min - 6-8 portions</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mx-3">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some entree" className="card-img-top"/>
                    <p className="h6 card-subtitle mt-3">Recipes-Soup</p>
                    <h5 className="card-title mt-3">Some Soup</h5>
                    <p className="card-text">30 min - 6-8 portions</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mx-3">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="some entree" className="card-img-top"/>
                    <p className="h6 card-subtitle mt-3">Recipes-Munchies</p>
                    <h5 className="card-title mt-3">Wine Mixer</h5>
                    <p className="card-text">45 min - 6-8 portions</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeRecommendations
