import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddProduct.css";
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data =>{
      console.log(data);
      axios.post('https://ancient-coast-36281.herokuapp.com/products', data)
      .then(res => {
          if(res.data.insertedId){
              alert("product added success");
              reset();
          }
      })
} ;
    return (
        <div className="add-service">
            <h2>add a product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <input type="number" {...register("price")} placeholder="price" />
      <textarea {...register("description")} placeholder="description"/>
      <input {...register("img")} placeholder="img url" />
      <input type="submit" />
    </form>

        </div>
    );
};

export default AddProduct;