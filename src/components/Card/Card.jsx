import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="col-span-1" key={item.product_id}>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className='h-80' src={item.image} alt={item.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>A smart streaming media player by {item.Brand}.</p>
                <div className="card-actions justify-end">
                    <p className="text-lg font-semibold mb-2 text-primary">Special Price: ${item["Special Price"]}</p>
                    <p className="text-gray-600">Regular Price: ${item["Regular Price"]}</p>
                    <div className="flex items-center mt-4">
                        <div className="flex-1">
                            <span className="text-yellow-500">
                                ★ {item.ratings.average} ({item.ratings.count} ratings)
                            </span>
                        </div>
                        <button className="btn btn-primary" style={{ backgroundColor: item.ButtonColor }}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;