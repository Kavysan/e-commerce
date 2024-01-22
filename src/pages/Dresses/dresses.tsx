// import './dresses.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import dress1 from '../../assets/Images/women/dresses/dress1.jpg'
import dress2 from '../../assets/Images/women/dresses/dress2.jpg'
import dress3 from '../../assets/Images/women/dresses/dress3.jpg'
import dress4 from '../../assets/Images/women/dresses/dress4.jpg'
import dress5 from '../../assets/Images/women/dresses/dress5.jpg'
import dress6 from '../../assets/Images/women/dresses/dress6.jpg'
import dress7 from '../../assets/Images/women/dresses/dress7.jpg'
import dress8 from '../../assets/Images/women/dresses/dress8.jpg'



interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const dresses = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedDress, setSelectedDress] = useState<Dress | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
    const handleModalClose = () => {
      setShowModal(false);
      setSelectedDress(null);
    };
  
    const handleModalShow = (dress: Dress) => {
      setShowModal(true);
      setSelectedDress(dress);
    };

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    const dresses:Dress[] = [
        { id: 1, src: dress1, alt: 'Dress 1', text: 'Vacay Floral print twist wrap over tie Dress', price: '$30.99' },
        { id: 2, src: dress2, alt: 'Dress 2', text: 'Polks Dot Printed Lantern Sleeve Belted Dress', price: '$40.99' },
        { id: 3, src: dress3, alt: 'Dress 3', text: 'French Knot Back Lantern Sleeve Ruffle', price: '$35.99' },
        { id: 4, src: dress4, alt: 'Dress 4', text: 'Vacay Floral print twist wrap over tie Dress', price: '$30.99' },
        { id: 5, src: dress5, alt: 'Dress 5', text: 'Polks Dot Printed Lantern Sleeve Belted Dress', price: '$40.99' },
        { id: 6, src: dress6, alt: 'Dress 6', text: 'French Knot Back Lantern Sleeve Ruffle', price: '$35.99' },
        { id: 7, src: dress7, alt: 'Dress 7', text: 'Vacay Floral print twist wrap over tie Dress', price: '$30.99' },
        { id: 8, src: dress8, alt: 'Dress 8', text: 'Polks Dot Printed Lantern Sleeve Belted Dress', price: '$40.99' },
    ];

  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">DRESSES</div>
                <div className='women-cat'>   
                    <ul className="list-unstyled d-flex col justify-content-center">
                        <li className="me-3">
                            <Link to='/dresses' className="nav-link" >Dresses</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/tops' className="nav-link">Tops</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/sweatshirts' className="nav-link">Sweatshirts</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/bottoms' className="nav-link">Bottoms</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/jumpsuits' className="nav-link">Jumpsuit</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container dress-cat">
                <section id="dress" className='cat'>
                    {/* <div className='sections'>Dresses</div> */}

                    <div className="d-flex dress-section container row">

                    {dresses.map((dress) => (
                        <div
                            key={dress.id}
                            className="col-md-4 each-img"
                            onClick={() => handleModalShow(dress)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={dress.src}
                                alt={dress.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{dress.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{dress.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(dress)}><FaCartPlus /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
                <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Body>
                <img src={selectedDress?.src} alt={selectedDress?.alt} className="img-fluid" />
                <div className="text-under-dress-pop-up ">{selectedDress?.text}</div>
                <div className="cost mt-3 d-flex row">
                    <div className="dollars p-0  col-4">{selectedDress?.price}</div>
                    <div className=" sizes col-4 d-flex justify-content-around align-items-center">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                        <div
                            key={size}
                            className={`size-circle ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </div>
                        ))}
                    </div>
                    <div className="col-4 cart-under-dress">
                        <FaCartPlus />
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={handleModalClose}
                        className='close-button'
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
        
        </>

  )
}
export default dresses;
