import React, {useState} from 'react';
import JAVCreateForm from "./JAVCreateForm";
import JAVItem from "./JAVItem";
export default function JAVTutorial() {
    const [watched, setWatched]= useState();
    const [data, setData] = useState([

        { id: 1, name: 'JAV1001', date: '5/8/2022', watched: true},
        { id: 2, name: 'JAV1002', date: '5/7/2022', watched: false},
        { id: 3, name: 'JAV1003', date: '5/6/2022', watched: false},
    ]);
    // tạo 1 item mới
    const addItem = (name) => {
        const newItem = {
            id : Date.now(),
            name: name,
            date: new Date().toISOString(),
            watched: false,
        }

        // data.push(newItem); ở đây chúng tôi không làm thế
        // tạo 1 mảng mới
        const newData = [...data, newItem]; //newData phải là 1 mảng gồm tất cả các phần tử cũ của data + newItem
        setData(newData);
        console.log(newItem);
    }
    const deleteItem = (item) => {
        const removedItems = data.filter((record => record.id !== item)); 
        setData(removedItems);
        console.log(item);
    }

    const handleButtonWatched = (event) => {
        const markItem = {...data, watched: true};
        setWatched(markItem);
        console.log(markItem);
    }

    return(
        <div className="jav-tutorial">
            <h1>Japanese Anti Virus</h1>
            <JAVCreateForm onAddItem = {addItem}/>

            <div className="jav-list">
                {data.map(jav => {
                   return <JAVItem id= {jav.id} 
                   name={jav.name} 
                   date={jav.date} 
                   watched={jav.watched} 
                   onDeleteItem={deleteItem}
                   onMarkItem= {handleButtonWatched} />
                })}
            </div>
        </div>
    );
}