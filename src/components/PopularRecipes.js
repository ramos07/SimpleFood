import React from 'react'

const PopularRecipes = () => {
    return (
        <div id="popular-recipes" className="position-relative py-5">
            <div className="container-fluid mt-3">
                <div className="d-flex flex-md-row flex-sm-column justify-content-between">
                    <h2 className="mt-4 ml-lg-5">Popular Recipes</h2>
                    <a href="/recipe" className="mt-4 mr-lg-5">See All</a>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="row d-flex flex-row justify-content-center mt-3">
                    <div className="col-lg-3 col-md-6 mb-5 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some entree" className="card-img-top"/>
                            <p className="h6 card-subtitle mt-3">Recipes-Salad</p>
                            <h5 className="card-title mt-3">Fresh Green Salad</h5>
                            <p className="card-text">45 min - 6-8 portions</p>
                        </div>  
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some entree" className="card-img-top"/>
                            <p className="h6 card-subtitle mt-3">Recipes-Soup</p>
                            <h5 className="card-title mt-3">Pumpkin Soup</h5>
                            <p className="card-text">30 min - 6-8 portions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some entree" className="card-img-top"/>
                            <p className="h6 card-subtitle mt-3">Recipes-Wine</p>
                            <h5 className="card-title mt-3">Wine Mixer</h5>
                            <p className="card-text">45 min - 6-8 portions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="some entree" className="card-img-top"/>
                            <p className="h6 card-subtitle mt-3">Recipes-Healthy</p>
                            <h5 className="card-title mt-3">Fruit Bowl</h5>
                            <p className="card-text">45 min - 6-8 portions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="some entree" className="card-img-top"/>
                            <p className="h6 card-subtitle mt-3">Recipes-Mexican</p>
                            <h5 className="card-title mt-3">Tacos De Asada</h5>
                            <p className="card-text">45 min - 6-8 portions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="some entree" className="card-img-top"/>
                            <p className="h6 card-subtitle mt-3">Recipes-Salad</p>
                            <h5 className="card-title mt-3">Salad</h5>
                            <p className="card-text">45 min - 6-8 portions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularRecipes
