import React from 'react'
import ShowCase from '../components/ShowCase'
import RatingsReviews from '../components/RatingsReviews'

const Main = () => {
    return (
        <div className='mainPage'>
            <ShowCase />
            <h1 className='reviewTitle'>Reviews</h1>
            <RatingsReviews />
        </div>
    )
} 
export default Main