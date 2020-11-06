import React from 'react'
import RecipeRecommendations from '../components/RecipeRecommendations'

const RecipeScreen = () => {
    return (
        <div id="recipe">
            <div className="container-fluid py-5 my-5">
                <div className="row px-5">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="row">
                            <div className="col-12 mb-lg-5 mb-5">
                                <img className="img-fluid shadow d-block mx-auto" src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="some food"/>
                            </div>
                            <div className="col-12">
                                <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="chinees food" className="img-fluid d-block mx-auto shadow"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1">
                        <div className="row">
                            <div className="col-12">
                                <div className="main-recipe">
                                    <h1 className="recipe-title">Pot Stickers</h1>
                                    <ul className="recipe-overview my-5" style={{listStyle: 'none'}}>
                                        <li className="portion-size">
                                            <i className="fas fa-utensil-spoon"></i>
                                            <p>6-8 portions</p>
                                        </li>
                                        <li className="prep-time">
                                            <i className="fas fa-utensil-spoon"></i>
                                            <p>15 min preparation</p>
                                        </li>
                                        <li className="cooking-time">
                                            <i className="fas fa-utensil-spoon"></i>
                                            <p>30 min cooking</p>
                                        </li>
                                    </ul>
                                    <div className="recipe-categories">
                                        <ul className="recipe-category-list text-muted">
                                            <li className="recipe-category">Soup</li>
                                            <li className="recipe-category">Vegetarian</li>
                                            <li className="recipe-category">Gluten free</li>
                                            <li className="recipe-category">Healthy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5">
                                <h2 className="mb-3">Ingredients</h2>
                                <ul className="ingredients-list">
                                    <li className="ingredient">1/2 Irure irure ut ut commodo fugiat id enim irure.</li>
                                    <li className="ingredient">1/8 Irure irure ut ut commodo fugiat id enim irure.</li>
                                    <li className="ingredient">4 Cups of irure ut ut commodo fugiat id enim irure.</li>
                                    <li className="ingredient">3/4 Irure irure ut ut commodo fugiat id enim irure.</li>
                                    <li className="ingredient">1 cup Irure irure ut ut commodo fugiat id enim irure.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 light-bg py-5">
                        <h2 className="text-left">Preparation</h2>
                        <ol className="prep-instructions-list">
                            <li className="prep-instruction">
                                Consectetur est culpa aute laborum exercitation commodo reprehenderit Lorem culpa mollit ipsum minim adipisicing. Nostrud nulla quis amet commodo et laborum Lorem nostrud.
                            </li>
                            <li className="prep-instruction">
                                Irure duis pariatur commodo occaecat Lorem excepteur.
                            </li>
                            <li className="prep-instruction">
                                Consectetur est culpa aute laborum exercitation commodo reprehenderit Lorem culpa mollit ipsum minim adipisicing. Nostrud nulla quis amet commodo et laborum Lorem nostrud.
                            </li>
                            <li className="prep-instruction">
                                Consectetur est culpa aute laborum exercitation commodo reprehenderit Lorem culpa mollit ipsum minim adipisicing. Nostrud nulla quis amet commodo et laborum Lorem nostrud.
                            </li>
                            <li className="prep-instruction">
                                Consectetur est culpa aute laborum exercitation commodo reprehenderit Lorem culpa mollit ipsum minim adipisicing. 
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 mb-5">
                        <h3>You may also like ...</h3>
                    </div>
                    <div className="col-12">
                        <RecipeRecommendations />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeScreen
