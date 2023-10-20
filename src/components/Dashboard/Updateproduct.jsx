import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
const Updateproduct = () => {

    const Products = useLoaderData();
    console.log(Products[0]._id);
    const productid=Products[0]._id;



    const handleUpdate = e => {
        e.preventDefault();
        const Model = e.target.Model.value;
        const Brand = e.target.Brand.value;
        const category = e.target.category.value;
        const name = e.target.name.value;
        const Specification = e.target.Specification.value;
        const regularPrice = e.target.regularPrice.value
        const Special =e.target.Special.value
        const ratingsaverage =e.target.ratingsaverage.value
        const ratingscount =e.target.ratingscount.value
        const Feature1 =e.target.Feature1.value
        const Feature2 =e.target.Feature2.value
        const Feature3 =e.target.Feature3.value
        const ButtonColor =e.target.ButtonColor.value
        const image =e.target.image.value

        const updateproduct = {        
            Model: Model,
            Brand: Brand,
            category: category,
            name: name,
            Specification: Specification,
            "Regular Price": regularPrice,
            "Special Price": Special,
            ratings: {
                average: ratingsaverage,
                count: ratingscount,
            },
            features: {
                "Feature 1": Feature1,
                "Feature 2": Feature2,
                "Feature 3":Feature3,
            },
            ButtonColor: ButtonColor,
            image: image,
        };
        toast.success("Product update successful!")

        console.log(updateproduct);
 
        fetch(`http://localhost:5000/updatep/${productid}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Product update successful!")
                }
            })
   }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-5xl mb-8 text-center">Update Product </h2>
          <form onSubmit={handleUpdate} >
            <input className="mb-4 relative border w-full py-2 px-4" type="text" name="Model"  defaultValue={Products[0].Model} placeholder="Product Model" id="promodel" required/>
            <br />
            <input className="mb-4 relative border w-full  py-2 px-4" type="text" name="name"  defaultValue={Products[0].name} placeholder="Product Name" id="proname"/>
            <br />
            <input className="mb-4 relative border w-full py-2 px-4" type="text" name="Brand"  defaultValue={Products[0].Brand} placeholder="Brand" id="Brand" required/>
            <br />
            <input className="mb-4 relative border w-full py-2 px-4" type="text" name="category"  defaultValue={Products[0].category} placeholder="category" id="category" required/>
            <br />
            <input className="mb-4 relative border w-full py-2 px-4" type="text" name="Specification"  defaultValue={Products[0].Specification} placeholder="Specification" id="specification" required/>
            <br />
            <input
              className="mb-4 relative border w-full py-2 px-4" type="text" name="regularPrice"  defaultValue={Products[0]['Regular Price']} placeholder="Regular Price" id="RegularPricea" required/>
            <br />
            <input className="mb-4 relative border w-full py-2 px-4" type="text" name="Special"  defaultValue={Products[0]['Special Price']} placeholder="Special Price" id="RegularPrice" required/>
            <br />
            <div className="mb-4">
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ratingsaverage"  defaultValue={Products[0].ratings.average} placeholder="rating average" id="streetnamereg" required />
              <br />
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ratingscount"  defaultValue={Products[0].ratings.count} placeholder="ratings count" id="streetnumberreg" required />
              <br />
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature1"  defaultValue={Products[0].features['Feature 1']} placeholder="Feature 1" id="streetnamereg" required />
              <br />
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature2"  defaultValue={Products[0].features['Feature 2']} placeholder="Feature 2" id="streetnumberreg" required />
              <br />
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature3"  defaultValue={Products[0].features['Feature 3']} placeholder="Feature 3" id="areareg" required />
              <br />
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ButtonColor"  defaultValue={Products[0].ButtonColor} placeholder="ButtonColor" id="townreg" required />
              <br />
              <input className="mb-2 relative border w-full py-2 px-4" type="text" name="image"  defaultValue={Products[0].image} placeholder="image" id="postcodereg" required />
            </div>
            <br />
            <input className="btn btn-secondary mb-4 w-full" type="submit" value="Add Product" />
          </form>
      
        </div>
      </div>
    );
};

export default Updateproduct;