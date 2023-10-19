import React from 'react';
import FullBanner from './Banner/FullBanner';

const Amazon = () => {
    // Define the image sources
    const image1 = 'https://i.ibb.co/PjfGLXr/1-OK8o-Bs-JUGhwk-SIFc-Tcq-Ve-Q.webp';
    const image2 = 'https://i.ibb.co/kJd4tZg/Amazon-Fire-Stick-Banner.jpg';
    const image3 = 'https://i.ibb.co/TBqsL93/FIRE-TV-BANNER.webp';
    const image4 = 'https://i.ibb.co/TBqsL93/FIRE-TV-BANNER.webp';

    return (
        <div>
            <FullBanner image1={image1} image2={image2} image3={image3} image4={image4}/>
        </div>
    );
};

export default Amazon;