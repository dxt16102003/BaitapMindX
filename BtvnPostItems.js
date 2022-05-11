import React, {useState} from 'react';
import './BtvnPostItems.css';
export default function PostInput({id, title, content, date, like, onEditTitle, onEditContent, onEditLike}){
    const [isEditing, setIsEditing]= useState(false);
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const [isSecEditing, setIsSecEditing] = useState(false)

    const editTitle = (event) => {
        onEditTitle(id, newTitle);
        setIsEditing(false);
        setNewTitle('');
    }

    const editContent = (event) => {
        onEditContent(id, newContent);
        setIsSecEditing(false);
        setNewContent('')
    }

    const changeNewTitle = (event) => {
        setNewTitle(event.target.value)
    }
    const enableEditingTitle = (event) => {
        setIsEditing(true)
        console.log('enableEditing')
    }
    const changeNewContent = (event) => {
        setNewContent(event.target.value)
    }
    const enableEditingContent = (event) => {
        setIsSecEditing(true)
        console.log('enableEditing')
    }
    const changeLike = (event) => {
        onEditLike(id);
    }

    return(
    <div className="post-items">
        <div className="post-info">
            {isEditing ? <input type="text" defaultValue={title} onChange={changeNewTitle}/> : <b className='item-name'>{title}</b>}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <i className='item-date'>{date}</i> 
            &nbsp; &nbsp; &nbsp; &nbsp;
            {isSecEditing ? <textarea type="text" defaultValue={content} onChange={changeNewContent}/> :<p className='item-content'>{content}</p>}
            
           <h4 classname="item-like">Like: {like}</h4>
        </div>
        <div className="post-options">
            <button onClick={changeLike}>Thích</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            {isEditing ? <button onClick={editTitle}>Lưu Title</button> : <button onClick ={enableEditingTitle}>Sửa Title</button>}
            &nbsp; &nbsp; &nbsp; &nbsp;
           {isSecEditing ? <button onClick={editContent}>Lưu Content</button> : <button onClick ={enableEditingContent}>Sửa Content</button>}
        </div>
    </div>
    ); 
}