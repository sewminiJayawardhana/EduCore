import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src= {about_img} alt="" className='about-img' />

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>At our university, we believe in empowering students through quality education and supportive learning environments. We aim to inspire curiosity, creativity, and leadership by providing the resources and guidance students need to achieve their goals</p>
        </div>
      
    </div>
  )
}

export default About
