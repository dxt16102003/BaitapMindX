import React from 'react';
import "./JAVItem.css";
export default function JAVItem({name, date, watched, id, onDeleteItem, onMarkItem}){
    const remove = (event) => {
        onDeleteItem(id);
    }
    const mark = (event) => {
        onMarkItem(watched);
    }

   
    return (
        <div className="jav-items">
            <div className="item=info">
                <b className='item-name'>{name}</b>
                <i className='item-date'>{date}</i> 
                &nbsp; &nbsp; &nbsp; &nbsp;
                <code> {watched ? 'watched' : ''}</code>
            </div>
            <div className="item-options">
                <button onClick={mark}>Xem</button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={remove}>Xóa</button>
            </div>
        </div>
    );
}