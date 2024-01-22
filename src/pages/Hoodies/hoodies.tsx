// import './tops.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import hood1 from '../../assets/Images/men/hoodies/hood1.jpg'
import hood2 from '../../assets/Images/men/hoodies/hood2.jpg'
import hood3 from '../../assets/Images/men/hoodies/hood3.jpg'
import hood4 from '../../assets/Images/men/hoodies/hood4.jpg'
import hood5 from '../../assets/Images/men/hoodies/hood5.jpg'
import hood6 from '../../assets/Images/men/hoodies/hood6.jpg'
import hood7 from '../../assets/Images/men/hoodies/hood7.jpg'
import hood8 from '../../assets/Images/men/hoodies/hood8.jpg'


interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const hoodies = () => {
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

    const hoods: Dress[] = [
        { id: 1, src: hood1, alt: 'Hood 1', text: 'Deer & Slogan Graphic Kangaroo Pocket Hood', price: '$20.99' },
        { id: 2, src: hood2, alt: 'Hood 2', text: 'Men Baseball Print Kangaroo Pocket Hood', price: '$25.99' },
        { id: 3, src: hood3, alt: 'Hood 3', text: 'Manfinity Hypemode Zip Up Drawstring Hood', price: '$18.99' },
        { id: 4, src: hood4, alt: 'Hood 4', text: 'Deer & Slogan Graphic Kangaroo Pocket Hood', price: '$20.99' },
        { id: 5, src: hood5, alt: 'Hood 5', text: 'Men Baseball Print Kangaroo Pocket Hood', price: '$25.99' },
        { id: 6, src: hood6, alt: 'Hood 6', text: 'Manfinity Hypemode Zip Up Drawstring Hood', price: '$18.99' },
        { id: 7, src: hood7, alt: 'Hood 7', text: 'Deer & Slogan Graphic Kangaroo Pocket Hood', price: '$20.99' },
        { id: 8, src: hood8, alt: 'Hood 8', text: 'Men Baseball Print Kangaroo Pocket Hood', price: '$25.99' },

    ];


  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">HOODIES</div>
                <div className='women-cat'>   
                    <ul className="list-unstyled d-flex col justify-content-center">
                        <li className="me-3">
                            <Link to='/tshirts' className="nav-link" >Tshirts</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/outwears' className="nav-link">Outwears</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/menbottoms' className="nav-link">Bottoms</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/hoods' className="nav-link">Hoodies</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container dress-cat">
                <section id="dress" className='cat'>
                    {/* <div className='sections'>Dresses</div> */}

                    <div className="d-flex dress-section container row">

                    {hoods.map((hood) => (
                        <div
                            key={hood.id}
                            className="col-md-4 each-img mb-5"
                            onClick={() => handleModalShow(hood)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={hood.src}
                                alt={hood.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{hood.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{hood.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(hood)}><FaCartPlus /></div>
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
export default hoodies;
