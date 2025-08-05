import React, { useRef } from 'react'
import './Testimonials.css' 
import next_icon from'../../assets/next-icon.png'
import back_icon from'../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;


const slideForward =()=>{
    if(tx > -50){
        tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward =()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src= {back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Shehani Perera</h3>
                            <span>EduCore , Sri Lanka</span>
                        </div>
                    </div>
                    <p> My experience at EduCore has been nothing short of amazing. The inspiring faculty, modern learning environment, and endless opportunities for personal and academic growth have made my journey truly rewarding. </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Reshan Silva</h3>
                            <span>EduCore , Sri Lanka</span>
                        </div>
                    </div>
                    <p> EduCore has completely transformed the way I learn and grow. The interactive classes, helpful mentors, and vibrant campus life have made every day exciting and meaningful. I feel more confident and prepared for my future </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Nilakshi Fernando</h3>
                            <span>EduCore , Sri Lanka</span>
                        </div>
                    </div>
                    <p> Studying at EduCore has been an incredible experience. The blend of academic rigor and practical learning has helped me discover my true potential. The friendships and memories I’ve made here will last a lifetime </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Ashen Rajapaksha</h3>
                            <span>EduCore , Sri Lanka</span>
                        </div>
                    </div>
                    <p> EduCore offers more than just education — it offers a journey. From day one, I felt welcomed and supported. The engaging lectures, career guidance, and vibrant campus culture have made my time here unforgettable. </p>
                </div>
            </li>

            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
