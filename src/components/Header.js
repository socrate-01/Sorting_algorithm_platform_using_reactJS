import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);
  const [showDocumentBar, setShowDocumentBar] = useState(true);


  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  const documentationHandler = () => {
    setShowDocumentBar(!showDocumentBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Socratis</h3>
        <div className="header__bar__icons">
          <a href="https://github.com/socrate-01" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
        </div>
      </div>

      <div id="document__bar" style = {{transform: showDocumentBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Full Documentation</h3>
        <div className="header__bar__icons">
          <a className='algorithms' href="https://www.geeksforgeeks.org/bubble-sort/" target='_blank'>Bubble sort</a>
          <a className='algorithms' href="https://www.geeksforgeeks.org/merge-sort/" target='_blank'>Merge sort</a>
          <a className='algorithms' href="https://www.geeksforgeeks.org/insertion-sort/" target='_blank'>Insertion sort</a>
          <a className='algorithms' href="https://www.geeksforgeeks.org/selection-sort/" target='_blank'>Selection sort</a>
          <a className='algorithms' href="https://www.geeksforgeeks.org/quick-sort/" target='_blank'>Quick sort</a>

        </div>
      </div>

      <div className="header-logo">Sorting<span> algorithm</span></div>
      <div className="header__options">
         <h3 className="header__option" onClick = {documentationHandler}>Documentation</h3>
      </div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}><span>S</span>OCRATIS</h3>
      </div>
   </div>
  )
}

export default Header;