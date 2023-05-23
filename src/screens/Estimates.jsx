import React from 'react'

const Estimates = () => {
    return (
        <div className='subFormDiv'>
        <form className='subForm'>

            <div className='inDiv'>
                <h2>Your Email</h2>
                <input type='text' placeholder='Email' />
            </div>

            <div className='inDiv'>
                <h2>Phone Number</h2>
                <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='ex: 123-456-7890' />
            </div>

            <div className='inDiv'>
                <h2>Message</h2>
                <textarea type='text' placeholder='Send a message to our team' />
            </div>

        </form>
        </div>
    )
}

export default Estimates