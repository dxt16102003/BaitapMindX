import React from 'react'
import BtnDo from './Subject'
export default function TestForm({title,time,amount,subject}){
    return(
        <div className="container-item">
            <h1>{title}</h1>
            <div className="item-info">
                <p>Thời lượng : {time}</p>
                <p>Số câu hỏi : {amount}</p>
            </div>
            <button>Do</button>
            <BtnDo data={subject}/>
        </div>
    )
}