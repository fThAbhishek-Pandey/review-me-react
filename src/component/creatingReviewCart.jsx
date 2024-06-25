import React from "react";
import ReviewCard from "./ReviewCard";
const ReviewCards =({reviewData})=>{
       console.log("I am in Review Cards . reviewData : ",reviewData);
      
       
       return (
           <>
             {
               reviewData.map((reviewer)=> {
                const {id,name,job,img,text}= reviewer;
                console.log("id : ",id, "name : ",name,"job : ",job," img : ",img,"text :",text);
                return <ReviewCard key={{id}} {...reviewer} />
               }
             )
             }
           </>
       )
   
}
export default ReviewCards;