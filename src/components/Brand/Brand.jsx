import React, { useEffect, useState } from 'react';
import FullBanner from './Banner/FullBanner';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const Brand = () => {
    const { brand } = useParams();
    const productdata = useLoaderData();
    const [branddata, setBrandData] = useState(null);
    
    useEffect(() => {
        fetch(`http://localhost:5000/brands/${brand}`)
            .then(response => response.json())
            .then(data => setBrandData(data));});

    
    let image1 = '';
    let image2 = '';
    let image3 = '';
    let image4 = '';
    let BrandName= '';
    
    if (branddata && branddata.length > 0) {
        image1 = branddata[0].BrandPicture1;
        image2 = branddata[0].BrandPicture2;
        image3 = branddata[0].BrandPicture3;
        image4 = branddata[0].BrandPicture4;
        BrandName = branddata[0].BrandName;
    }

    return (
        <div>
            <FullBanner image1={image1} image2={image2} image3={image3} image4={image4}/>
            <p className='font-sans	text-4xl font-bold text-center text-blue-600 my-5'>All {BrandName} Product</p>
            <div className="grid grid-cols-4 gap-2 ms-5">
                {productdata.map((product) => <Card item={product}></Card>)}
            </div>
        </div>
    );
};

export default Brand;
