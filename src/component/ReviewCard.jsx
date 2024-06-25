import React from "react";
const ReviewCard = ({id,name,job, img, text })=>{
    // const = reviewer;
    console.log("id : ",id, "name : ",name,"job : ",job," img : ",img,"text :",text);
    console.log("img : ",img);
    return (
                   
            <main  className="w-[30rem] h-[30rem] flex flex-col justify-center bg-slate-50 m-4 rounded-md p-8">
                 <img  className="w-48 h-48 rounded-full border-2 bg-slate-500 place-self-center " src={img} alt={name} />
                 <h2 className="text-center font-mono text-[#222] font-bold ">{name}</h2>
                 <h4 className="text-center">{job}</h4>
                 <p className="text-center">{text}</p>
                
            </main>
    );
}
export default ReviewCard;