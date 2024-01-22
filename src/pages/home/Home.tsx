import './home.css'

import scroll1 from '../../assets/Images/scroll/scroll_1.jpg'
import scroll2 from '../../assets/Images/scroll/scroll_2.jpg'
import scroll3 from '../../assets/Images/scroll/scroll_3.jpg'
import scroll4 from '../../assets/Images/scroll/scroll_4.jpg'
import scroll5 from '../../assets/Images/scroll/scroll_5.jpg'

import link1 from '../../assets/Images/link/link1.png'
import link2 from '../../assets/Images/link/link2.png'
import link3 from '../../assets/Images/link/link3.png'
import link4 from '../../assets/Images/link/link4.png'
import link5 from '../../assets/Images/link/link5.png'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='slider-frame'>
      <div className="slide-images">
        <div className="img-container">
          <img src={scroll1} alt="image1" />
        </div>
        <div className="img-container">
          <img src={scroll2} alt="image2" />
        </div>
        <div className="img-container">
          <img src={scroll3} alt="image3" />
        </div>
        <div className="img-container">
          <img src={scroll4} alt="image4" />
        </div>
        <div className="img-container">
          <img src={scroll5} alt="image5" />
        </div>
      </div>

      {/* <div className="slides">
        <input type="radio" name = "radio-btn" id="radio1" />
        <input type="radio" name = "radio-btn" id="radio2" />
        <input type="radio" name = "radio-btn" id="radio3" />
        <input type="radio" name = "radio-btn" id="radio4" />
        <input type="radio" name = "radio-btn" id="radio5" />
        <div className="slide first">
          <img src={scroll1} alt="image1" />
        </div>
        <div className="slide first">
          <img src={scroll2} alt="image2" />
        </div>
        <div className="slide">
          <img src={scroll3} alt="image3" />
        </div>
        <div className="slide">
          <img src={scroll4} alt="image4" />
        </div>
        <div className="slide">
          <img src={scroll5} alt="image5" />
        </div>
        <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
        </div>
      </div> */}
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
        <label htmlFor="radio5" className="manual-btn"></label>
      </div>
    </div>
    {/* ------------------------ */}
    <div className='d-flex flex-row offer-container mt-3'>
          <div className="offer col-4"> 
            <div className="percentage">10% OFF</div>
            <div className="details">ORDERS OF $49+</div>
          </div>
          <div className="offer divider">|</div>
          <div className="offer col-3">
            <div className="percentage">15% OFF</div>
            <div className="details">ORDERS OF $89+</div>
          </div>
          <div className="offer divider">|</div>
          <div className="offer col-4">
            <div className="percentage">20% OFF</div>
            <div className="details">ORDERS OF $169+</div>
          </div>
    </div>
    <div className='d-flex flex-row category-container '>
          <Link to="/women"><div className="categories"> 
              <div className="pic"><img src={link1} alt="women link" /></div>
              <div className="titles">Women</div>
          </div></Link>
          <Link to="/men"><div className="categories"> 
              <div className="pic"><img src={link2} alt="men link" /></div>
              <div className="titles">Men</div>
          </div></Link>
          <Link to="/kids"><div className="categories"> 
              <div className="pic"><img src={link3} alt="kids link" /></div>
              <div className="titles">Kids</div>
          </div></Link>
          <Link to="/dresses"><div className="categories"> 
              <div className="pic"><img src={link4} alt="dress link" /></div>
              <div className="titles">Dresses</div>
          </div></Link>
          <Link to="/sweatshirts"><div className="categories"> 
              <div className="pic"><img src={link5} alt="sweatshirts link" /></div>
              <div className="titles">Sweatshirts</div>
          </div></Link>
          
    </div>
    
    </>

  );
}

export default Home;