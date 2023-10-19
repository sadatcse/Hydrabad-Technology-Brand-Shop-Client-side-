

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const brandImages = [
  {
    src: 'https://i.ibb.co/d7XRfB4/Amazon.jpg',
    alt: 'Amazon Logo',
    link: "/brand/amazon",
  },
  {
    src: 'https://i.ibb.co/59DkVnR/apple.jpg',
    alt: 'Apple Logo',
    link: "/brand/apple",
  },
  {
    src: 'https://i.ibb.co/NCj2p2s/Google.jpg',
    alt: 'Google Logo',
    link: "/brand/google",
  },
  {
    src: 'https://i.ibb.co/G2SxxhP/intel.jpg',
    alt: 'Intel Logo',
    link: "/brand/intel",
  },
  {
    src: 'https://i.ibb.co/ZfvNZGD/Samsung.jpg',
    alt: 'Samsung Logo',
    link: "/brand/samsung",
  },
  {
    src: 'https://i.ibb.co/h2hWWwn/Sony.jpg',
    alt: 'Sony Logo',
    link: "/brand/sony",
  },
];

const BrandsHome = () => {
  return (
    <div className="py-5 border border-inherit bg-gray-50	">
      <div className="text-center py-5 my-5">
        <Fade triggerOnce duration={1000}>
          <p className="font-pacifico text-4xl text-sky-500 font-bold">SHOP OUR BRANDS</p>
        </Fade>
      </div>
      <div className="grid grid-cols-6 gap-1 text-center mb-5 mx-2 pb-5">
        {brandImages.map((brand, index) => (
          <Fade key={index} triggerOnce duration={800 + index * 100}>
            <div className="brand-item">
              <Link to={brand.link}><img
                className="border rounded-full border-slate-200 hover:border-red-600 px-5 border-solid hover:border-dotted"
                src={brand.src}
                alt={brand.alt}
              /></Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default BrandsHome;
