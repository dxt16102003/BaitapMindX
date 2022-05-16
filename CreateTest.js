import React, {useState} from 'react';

export default function CreateTest({newSearch}){
    return(
    <div className="search-bar">
        <input type = "search"  placeholder = "nhập test" onChange={newSearch}/>
        <button type = "submit">Search</button>
        </div>
    );

}