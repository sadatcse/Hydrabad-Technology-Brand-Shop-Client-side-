import React from 'react';

const FullBanner = ({ image1, image2, image3, image4 }) => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={image1} className="w-full" alt="Image 1" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={image2} className="w-full" alt="Image 2" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={image3} className="w-full" alt="Image 3" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={image4} className="w-full" alt="Image 4" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default FullBanner;
