// import './tops.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import outwear1 from '../../assets/Images/men/outwear/outwear1.jpg'
import outwear2 from '../../assets/Images/men/outwear/outwear2.jpg'
import outwear3 from '../../assets/Images/men/outwear/outwear3.jpg'
import outwear4 from '../../assets/Images/men/outwear/outwear4.jpg'
import outwear5 from '../../assets/Images/men/outwear/outwear5.jpg'
import outwear6 from '../../assets/Images/men/outwear/outwear6.jpg'
import outwear7 from '../../assets/Images/men/outwear/outwear7.jpg'
import outwear8 from '../../assets/Images/men/outwear/outwear8.jpg'


interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const outwears = () => {
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

    const tshirts: Dress[] = [
        { id: 1, src: outwear1, alt: 'outwear 1', text: 'Manfinity Homme Men\'s Flap Pocket Jacket', price: '$30.99' },
        { id: 2, src: outwear2, alt: 'outwear 2', text: 'Manfinity Men Plaid Print Drawstring Hood', price: '$40.99' },
        { id: 3, src: outwear3, alt: 'outwear 3', text: 'Manfinity Homme Men Solid Zip Up Overcoat', price: '$35.99' },
        { id: 4, src: outwear4, alt: 'outwear 4', text: 'Manfinity Homme Men\'s Flap Pocket Jacket', price: '$30.99' },
        { id: 5, src: outwear5, alt: 'outwear 5', text: 'Manfinity Men Plaid Print Drawstring Hood', price: '$40.99' },
        { id: 6, src: outwear6, alt: 'outwear 6', text: 'Manfinity Homme Men Solid Zip Up Overcoat', price: '$35.99' },
        { id: 7, src: outwear7, alt: 'outwear 7', text: 'Manfinity Men Plaid Print Drawstring Hood', price: '$30.99' },
        { id: 8, src: outwear8, alt: 'outwear 8', text: 'Manfinity Homme Men Solid Zip Up Overcoat', price: '$40.99' },
    ];

  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">OUTWEARS</div>
                <div className='women-cat'>   
                    <ul className="list-unstyled d-flex col justify-content-center">
                        <li className="me-3">
                            <Link to='/tshirts' className="nav-link" >Tshirts</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/outwears' className="nav-link" >Outwears</Link>
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

                    {tshirts.map((tshirt) => (
                        <div
                            key={tshirt.id}
                            className="col-md-4 each-img mb-5"
                            onClick={() => handleModalShow(tshirt)}
                            style={{ cursor: 'pointer'}}
                        >
                            <img
                                src={tshirt.src}
                                alt={tshirt.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{tshirt.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{tshirt.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(tshirt)}><FaCartPlus /></div>
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
export default outwears;
