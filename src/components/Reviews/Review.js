import React from 'react'
import {FaArrowCircleRight} from 'react-icons/fa'
import jeff from '../../assets/jeff-hoyt-profile.jpg'
import maureen from '../../assets/Maureen-Stanley.jpg'
import "./Review.css"
function Review() {
    return (
        <div className='review-container p-5 rounded flex justify-around bg-gray-200'>
            <div>
            <img src={jeff} className='review-image'/>
            </div>
            <div style={{display: 'flex', width: '20%'}} >
              
                <div>
                <h3 className='font-bold text-2xl'>Review By:</h3>
                <h2>Jeff Hoyt</h2>
                <h4 className='text-gray-400'>Editor in Chief</h4>
                </div>
                
            </div>
            <div className='w-[50%] flex' >
                Since graduating from Harvard with an honors degree in Statistics, Jeff has been creating content in print, online, and on television. Much of his work has been dedicated to informing seniors on how to live better lives. As Editor-in-Chief of the personal Learn More About Jeff Hoyt.
            </div>
        </div>
    )
}

export default Review
