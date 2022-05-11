import React, {useState} from 'react';

export default function CreatePost({onAddPost}){

    const [title, setTitle] = useState();

    const [content, setContent] = useState();

    const handleCreatePost = (event) => {
        event.preventDefault();
        if ((!title) || (!content)){
            alert('please enter your title/content')
            return;
        }
        onAddPost(title, content);
    }

    return(
        <form onSubmit={handleCreatePost}>
            <div>
                <h2>Title</h2>
                <input type="text" onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <h2>Content</h2>
                <textarea type="text" onChange={(event) => setContent(event.target.value)}>Nhập content:</textarea>
            </div>
            <button>Post</button>
        </form>
    );
}