import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

export default function MangaContainer({image, name, viewCount, commentCount, lastestChapter, dateModified}){
    return (
        <div class="manga">
            <div className="manga-container">
                <div className='img-container'><img src = {image} alt ="Đây là ảnh"/><br/>
                    <span className="viewCount">{viewCount}</span> <FontAwesomeIcon icon={['fas', 'eye']} />
                    <span className="commentCount">{commentCount}</span>  <FontAwesomeIcon icon={['fas', 'comment']} />
                </div>
                <h3><b> {name}</b></h3><br/>
                <ul>
                    <li><span> {lastestChapter} </span></li>
                    <li><span> {dateModified} </span></li>
                </ul>
            </div>
            
        </div>
        
        
        
        
        

    );
}