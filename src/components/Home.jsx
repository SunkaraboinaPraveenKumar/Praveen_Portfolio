import React, { useRef,useEffect } from "react";
import pdf from '../pdf/PraveenKumarResume.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';
const Home = () => {
    const typedRef=useRef(null);
    useEffect(()=>{
        const options ={
            strings:["Welcome To My Profile","My Name is Sunkaraboina Praveen Kumar.","Tech Enthusiast","Machine Learner","Web Developer Front End and Back End"],
            typeSpeed:50,
            backSpeed:50,
            loop:true,
        }
        const typed=new Typed(typedRef.current,options);
        return () =>{
            typed.destroy();
        }
    },[])
    return (
        <>
            <div className="container home" id="home">
                <div className="left"
                data-aos="fade-up-right"
                data-aos-duration="1000">
                    <h1 ref={typedRef}></h1>
                    <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">
                        Download Resume
                    </a>
                </div>
                <div className="right"
                data-aos="fade-up-left"
                data-aos-duration="1000">
                    <div className="img">
                    <img src={`assets/${hero.imgSrc}`} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;