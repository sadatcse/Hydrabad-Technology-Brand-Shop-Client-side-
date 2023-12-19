import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {

   
    return (
<div className="col-span-1" key={item.product_id}>
  <div className="card w-96 h-128 bg-base-100 shadow-xl">
    <figure>
      <img className="h-80" src={item.image} alt={item.name} />
    </figure>
    <div className="card-body">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="card-title">{item.name}</h2>
          <p>{item.features['Feature 1']}.</p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-2 text-primary">
            Special Price: ${item["Special Price"]}
          </p>
          <p className="text-gray-600">Regular Price: ${item["Regular Price"]}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-4">
        <Link to={`/product/${item.product_id}`}> <button className="btn btn-primary" style={{ backgroundColor: item.ButtonColor }}>
            Details
          </button></Link>
          <Link to={`/updateproduct/${item.product_id}`}><button className="btn btn-secondary">
            Update
          </button></Link>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl pr-1">
              ★ {item.ratings.average}
            </span>
            <span className="text-gray-600">
              ({item.ratings.count} ratings)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Card;