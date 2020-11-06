import React from 'react'

import Hero from '../components/Hero'
import ArticlesPreview from '../components/ArticlesPreview'
import PopularRecipes from '../components/PopularRecipes'
import Subscribe from '../components/Subscribe'
import About from '../components/About'

const HomeScreen = () => {
    return (
        <>
            <Hero />
            <ArticlesPreview />
            <PopularRecipes />
            <Subscribe />
            <About />
        </>
    )
}

export default HomeScreen
