import React, { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
const Card = ({ item }) => {
    const { user, loading } = useContext(AuthContext);

    const userUid = user?.uid;
   

    const Addtocart = (Productid, userUid) => {
        const addProductid = Productid;
        const adduserid = userUid;

        console.log(addProductid);
        console.log(addProductid);
    
        // Construct the cart object with the userUid
        const cart = {
            userUid: adduserid,
            cart: [{ productId: addProductid, quantity: 1 }] // Initial quantity is 1
        };
    
        // Send a POST request to the server
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            if (data._id) {
                console.log('Product added to the cart');
            }
        });
    }



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
                        <button onClick={() => Addtocart(item.product_id,userUid)} className="btn btn-primary" style={{ backgroundColor: item.ButtonColor }}>
                            Add to cart 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;