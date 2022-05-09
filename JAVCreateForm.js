import React, {useState} from 'react';
//onAddItem là 1 function
//onAddItem = addItem ở bên tutorial
export default function JAVCreateForm({onAddItem}){
    const [name, setName] = useState();
    const handleCreateForm = (event) => {
        event.preventDefault();
        if (!name){
            alert('Please Enter Name')
            return;
        }
        console.log("Tạo" + name);
        onAddItem(name); //addItem(name)
    }
    return(
        <form onSubmit = {handleCreateForm}>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <button>Thêm</button>
        </form>
    );
}