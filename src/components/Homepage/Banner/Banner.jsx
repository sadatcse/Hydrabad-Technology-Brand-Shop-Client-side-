import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
<div className='grid grid-rows-2 grid-flow-col gap-2'>
    <div className='row-span-2 col-span-2 pt-2'>
        <div className="carousel w-full m-0">
      <div
        id="slide1"
        className="carousel-item relative w-full"
        data-aos-delay="500"
        data-aos="slide-up"
       
      >
        <img src="https://i.ibb.co/njFYF9Q/Homepage123.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full"
        data-aos-delay="700"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="6000"
      >
        <img src="https://i.ibb.co/njFYF9Q/Homepage123.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/njFYF9Q/Homepage123.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/njFYF9Q/Homepage123.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        </div>
    </div>
    <div className='col-span-1 row-span-1'>
        <img src='https://i.ibb.co/zfvvJZT/side-banner-1.jpg'></img>
    </div>
    <div className='col-span-1 row-span-1'>
    <img src='https://i.ibb.co/0MMp2Yn/side-banner-2.jpg'></img>
    </div>

</div>
   
  
  );
};

export default Banner;
