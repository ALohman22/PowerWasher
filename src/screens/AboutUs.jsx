import React from 'react'
import TeamCard from '../components/TeamCard'
import ToolCard from '../components/ToolCard'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <h1>Meet the Team!</h1>
                <TeamCard />
                <TeamCard />
            <h1>Our Tools</h1>
                <ToolCard />
                <ToolCard />
        </div>
    )
}

export default AboutUs