import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import "./AddReview.css";
const AddReview = () => {
    const{user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://ancient-coast-36281.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Review Add sucess');
                reset();
            }
        })
    }
    return (
        <div className="add-review">
            <h1>add a Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}  defaultValue={user.displayName} />
      <input {...register("email")} defaultValue={user.email} />
      <textarea {...register("description")} placeholder="Say Something For Review"/>
      <input type="number" {...register("rate")} placeholder="Please Rate Us" />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddReview;