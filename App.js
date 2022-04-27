//import logo from './logo.svg';
import './App.css';
import MangaContainer from './component/MangaContainer';
import "./fontawesome.js";

function App() {
  return (
    <div className="Container">
      
      <MangaContainer name = "One Piece" 
                      viewCount ="190748" 
                      commentCount ="32832" 
                      lastestChapter = "Chapter 1043"
                      dateModified = "22/04/2022"
                      image ="https://s199.imacdn.com/tt24/2022/03/11/5c3cf413891e08c7_08b47dd0222c9899_363058164698568079674.jpg"
                       
                      />;
      <MangaContainer name = "One Piece" 
                      viewCount ="190000" 
                      commentCount ="32833" 
                      lastestChapter = "Chapter 1044"
                      dateModified = "23/04/2022"
                      image ="https://s199.imacdn.com/tt24/2022/03/25/56640bd6e1532825_72ef12ecc172a0af_429879164819530159674.jpg"
                       
                      />;   
      <MangaContainer name = "Kimetsu no Yaiba" 
                      viewCount ="190110" 
                      commentCount ="33112" 
                      lastestChapter = "Chapter 170"
                      dateModified = "24/04/2021"
                      image ="https://kumacdn.club/wp-content/uploads/K/Kimetsu%20No%20Yaiba/Chapter%20175/003.jpg"
                       
                      />;   
      <MangaContainer name = "Attack on Titan" 
                      viewCount ="232455" 
                      commentCount ="50653" 
                      lastestChapter = "Chapter 139"
                      dateModified = "24/01/2022"
                      image ="https://pbs.twimg.com/media/EyRPJ4KWEAAoPqc.jpg:large"
                       
                      />;                                        
      </div>
  );
}

export default App;
