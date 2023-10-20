import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const BrandsHome = () => {
  const {Brands} = useContext(AuthContext);
console.log(Brands);

  return (
    <div className="py-5 border border-inherit bg-gray-50	">
      <div className="text-center py-5 my-5">
        <Fade triggerOnce duration={1000}>
          <p className="font-pacifico text-4xl text-sky-500 font-bold">SHOP OUR BRANDS</p>
        </Fade>
      </div>
      <div className="grid grid-cols-6 gap-1 text-center mb-5 mx-2 pb-5">
        {Brands.map((brand,index) => (
          <Fade key={index} triggerOnce duration={800 + index * 100}>
            <div className="brand-item">
            <Link to={`/brand/${brand.BrandName}`}><img
                className="border rounded-full border-slate-200 hover:border-red-600 px-5 border-solid hover:border-dotted"
                src={brand.BrandIcon}
                alt={brand.BrandName}
              /></Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default BrandsHome;
