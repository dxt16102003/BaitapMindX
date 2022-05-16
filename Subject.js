import React from "react";



export default function BtnDo({data}){
    return(
    <div className="btn-item">
        {data.map((item,index)=>{
            return(
                <div key={index} className="btn">{item}</div>
            )
        })}
        
    </div>
    )
}