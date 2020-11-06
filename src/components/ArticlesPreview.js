import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import * as contentful  from 'contentful'

// var client = contentful.createClient({
//     space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN
// })

const ArticlesPreview = () => {

    // const [articles, setArticles] = useState([])

    // const truncate = (string, num=100) => {
    //     if(string.length <= num){
    //         return string
    //     }
    //     return string.slice(0, num) + "..."
    // }

    // useEffect(() => {
    //     client.getEntries().then(response => {
    //         // Only get the entries that are articles
    //         var entries = response.items.filter(entry => entry.fields.hasOwnProperty('articleCategory'))
    //         setArticles(entries)
    //     })
    // },[])

    // console.log(articles);

    return (
        <div id="articles-preview" className="position-relative light-bg" >
            <div className="container-fluid py-5">
                <div className="row d-flex flex-row justify-content-center mt-3">
                    {/* {
                        articles && (
                            articles.map(article => (
                                <div className="col-lg-3 mb-4 mx-3">
                                    <div className="card">
                                        <img src={article.fields.articleImage.fields.file.url} alt={article.fields.articleImage.fields.title} className="card-img-top"/>
                                        <p className="h6 mt-3 text-uppercase">{article.fields.articleCategory}</p>
                                        <h5 className="card-title">{article.fields.articleTitle}</h5>
                                        <p className="card-text">
                                            {truncate(article.fields.articleContent)}
                                        </p>
                                        <Link to="/articles">Read More</Link>
                                    </div>
                                 </div>
                            ))
                        )
                    } */}
                    <div className="col-lg-3 mb-4 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="something" className="card-img-top"/>
                            <p className="h6 mt-3">TIPS</p>
                            <h5 className="card-title">Non sint ipsum Lorem eiusmod in.</h5>
                            <p className="card-text">
                                Eu proident ullamco excepteur quis magna Lorem tempor. Velit dolor reprehenderit aute esse eiusmod excepteur...
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1094&q=80" alt="something" className="card-img-top"/>
                            <p className="h6 mt-3">LIFESTYLE</p>
                            <h5 className="card-title">Non sint ipsum Lorem eiusmod in.</h5>
                            <p className="card-text">
                                Eu proident ullamco excepteur quis magna Lorem tempor. Deserunt fugiat et elit occaecat consectetur...<a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 mx-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="something" className="card-img-top"/>
                            <p className="h6 mt-3">TIPS</p>
                            <h5 className="card-title">Non sint ipsum Lorem eiusmod in.</h5>
                            <p className="card-text">
                                Eu proident ullamco excepteur quis magna Lorem tempor. Aliqua consectetur velit do reprehenderit consequat veniam quis...<a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-lg-end">
                    <div>
                        <Link to="/articles" className="mr-5 text-center-sm">More articles</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesPreview
