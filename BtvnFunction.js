import React, {useState} from 'react';
import PostInput from './BtvnPostItems.js';
import CreatePost from './BtvnForm.js';

export default function AppFunction(){


    const [data, setData] = useState([
        {id: 1, title: 'Tên', content: 'tôi tên abcxyz', date: '5/8/2022', like: 0},
        {id: 2, title: 'Job', content: 'tôi học ngành abcxyz', date: '5/9/2022', like: 0}
    ]);

    const addPost = (title, content) => {
        const NewPost = {
           id: Date.now(),
            title: title,
            content: content,
            date: new Date().toISOString(),
            like: 0,
        }
        const newData = [NewPost, ...data];
        setData(newData);
        console.log(NewPost);
    }

    const editDataTitle = (itemId, newTitle) => {
        const newData = [...data];

        for(let item of data ){
            if(item.id === itemId)  item.title = newTitle
        }
        setData(newData);
    }

    const editDataContent = (itemId, newContent) => {
        const newData = [...data];
        for(let item of data){
            if(item.id === itemId) item.content = newContent
        }
        setData(newData);
    }
    const increaseLike = (itemId) => {
        const newData = [...data];
        for(let item of data){
            if(item.id === itemId) item.like ++
        }
        setData(newData);
    }

    return(
        <div className="my-post">
            <h1>Posts</h1>
            <CreatePost onAddPost = {addPost}/>
            <div className="show-post">
                {data.map(post => {
                    return <PostInput 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    like={post.like}
                    onEditTitle={editDataTitle}
                    onEditContent={editDataContent}
                    onEditLike={increaseLike}
                    />
                })}.
            </div>

        </div>
    );
}