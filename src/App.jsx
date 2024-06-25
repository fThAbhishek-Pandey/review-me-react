import React, { useState } from 'react'
import ReviewCards from './component/creatingReviewCart'
import ReviewData from './component/data'
import ReviewCard from "./component/ReviewCard";
import './App.css'

function App() {
   let [count,setCount] = useState(0);
   console.log("count : ",count);
   console.log("typeof : count ", typeof count);
    const prev = ()=>{
      console.log("I am start prev func : ",count);
      count--;
      if (count<0) count = ReviewData.length-1;
      console.log("I am end of prev func : ",count);
     
    }
    const next =()=>{
      console.log("I am in next func : ",count);
         count++;
         if(count>=ReviewData.length) count=0;
         console.log("I am out of next func :",count);
    }
    const random = ()=>{
         count = Math.floor(Math.random()*ReviewData.length);
    }
  return (
    <>
       {/* <ReviewCards  reviewData ={ReviewData}/> */}
       <h1 className='text-gray-200 m-8'>Abhishek Review</h1>
       <ReviewCard key={ReviewData[count].id}  {...ReviewData[count]}  />
       <div className='flex justify-around m-8'>
       <button onClick={()=>{
            prev();
            console.log("I am end prev btn",count);
            setCount(count);
       }}><i className="fa-solid fa-backward"></i></button>
       <button onClick={()=>{
            random();
            setCount(count);
       }}><i className="fa-solid fa-tower-broadcast"></i></button>
       <button onClick={()=>{
        console.log("I am start next btn",count);
        next();
        console.log("I am end next btn",count);
        setCount(count);
       }}><i className="fa-solid fa-forward"></i></button>
       </div>
    </>
  )
}

export default App
