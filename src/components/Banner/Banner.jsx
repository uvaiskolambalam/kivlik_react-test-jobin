import React from 'react'
import chairImage from '../../Assets/Group 542.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='Banner'>
            <div className="Banner_container">
                <p>CAREER</p>
                <img src={chairImage} alt="" />
            </div>

        </div>
    )
}

export default Banner