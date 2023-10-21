import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";
import { displayStars as ratings } from '../Utilis/Start';
import toast from 'react-hot-toast';
const DetailsPage  = () => {
    const Product = useLoaderData();
    const { user} = useContext(AuthContext);

    const useremail = user?.email;

    const ratingString = ratings(Product[0].ratings.average);

// Cart function 

const Addtocart = (Productid, useremail,Productname) => {
  const cart = {
      userEmail: useremail,  
      cart: [{ productId: Productid, ProductName: Productname, quantity: 1 }] 
  };

  console.log(cart);

  fetch('https://h-technology-server-c72odg8xe-sadatcses-projects.vercel.app/cart', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
  })
  .then(res => res.json())
  .then(data => {
    toast.success("Product added to cart");
  });
}


  return (

   
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:mr-4">
          <img src={Product[0].image} alt={Product[0].name} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{Product[0].name}</h1>
          <p className="text-gray-500 text-sm mb-4">Brand {Product[0].Brand}- Category {Product[0].category}</p>
          <p className="text-xl font-semibold text-red-600">Special Price :${Product[0]['Special Price']}</p>
          <p className="text-md text-gray-600">Regular Price :${Product[0]['Regular Price']}</p>
          <div className="flex items-center mt-4">
            <div className="text-yellow-400 px-3 py-1 rounded-full text-4xl">{ratingString}</div>
            <span className="ml-2 text-gray-500 ">({Product[0].ratings.count})</span> 
          </div>
          <p className="mt-4">{Product[0].Specification}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Key Features:</h2>
            <ul className="list-disc list-inside mt-2">
              {Object.values(Product[0].features).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => Addtocart(Product[0].product_id,useremail,Product[0].name)}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700"
            style={{ backgroundColor: Product[0].ButtonColor }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
