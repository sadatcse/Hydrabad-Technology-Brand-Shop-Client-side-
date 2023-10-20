import React from 'react';

const AddProduct = () => {
    return (
<div className="bg-gray-100 min-h-screen flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-5xl mb-8 text-center">Add Product </h2>
    <form >
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="Model"
        placeholder="Product Model"
        id="promodel"
        required/>
      <br />
      <input className="mb-4 relative border w-full  py-2 px-4" 
      type="text" 
      name="name" 
      placeholder="Product Name" 
      id="proname"/>
      <br />
      <div className="mb-4 relative border">
        <label htmlFor="Brand">Brand:</label>
        <select
          id="Brand"
          name="Brand"
          className="w-full py-2 px-4"
          required
        >
          <option value="" disabled selected>
            Select Brand
          </option>
          <option value="Male">apple</option>
          <option value="Male">amazon</option>
          <option value="Female">samsung</option>
          <option value="Male">sony</option>
          <option value="Female">google</option>
          <option value="Male">intel</option>
          
        </select>
      </div>
      <br />
      <div className="mb-4 relative border">
        <label htmlFor="Brand">Category:</label>
        <select
          id="category"
          name="category"
          className="w-full py-2 px-4"
          required
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="Mobile">Mobile</option>
          <option value="TV">TV</option>
          <option value="Laptop">Laptop</option>
          <option value="Camera">Camera</option>
          <option value="Accessories">Accessories</option>
         
          
        </select>
      </div>
      <br />
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="Specification"
        placeholder="Specification"
        id="specification"
        required
      />
      <br />
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="RegularPrice"
        placeholder="Regular Price"
        id="RegularPrice"
        required
      />
      <br />
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="Special"
        placeholder="Special Price"
        id="RegularPrice"
        required
      />
      <br />
      <div className="mb-4">
      <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ratingsaverage" placeholder="Feature 1" id="streetnamereg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ratingscount" placeholder="Feature 2" id="streetnumberreg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature1" placeholder="Feature 1" id="streetnamereg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature2" placeholder="Feature 2" id="streetnumberreg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature3" placeholder="Feature 3" id="areareg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ButtonColor" placeholder="ButtonColor" id="townreg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="image" placeholder="image" id="postcodereg" required />
      </div>
      <br />
      <input className="btn btn-secondary mb-4 w-full" type="submit" value="Add Product" />
    </form>

  </div>
</div>
    );
};

export default AddProduct;