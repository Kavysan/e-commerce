// import './tops.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import bottom1 from '../../assets/Images/men/bottom/bottom1.jpg'
import bottom2 from '../../assets/Images/men/bottom/bottom2.jpg'
import bottom3 from '../../assets/Images/men/bottom/bottom3.jpg'
import bottom4 from '../../assets/Images/men/bottom/bottom4.jpg'
import bottom5 from '../../assets/Images/men/bottom/bottom5.jpg'
import bottom6 from '../../assets/Images/men/bottom/bottom6.jpg'
import bottom7 from '../../assets/Images/men/bottom/bottom7.jpg'
import bottom8 from '../../assets/Images/men/bottom/bottom8.jpg'


interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const menbottoms = () => {
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

    const bottoms: Dress[] = [
        { id: 1, src: bottom1, alt: 'Bottom 1', text: 'Homme Men Solid Drawstring Waist Pants', price: '$20.99' },
        { id: 2, src: bottom2, alt: 'Bottom 2', text: 'Manfinity Mode Men Slant Pocket Bermuda', price: '$25.99' },
        { id: 3, src: bottom3, alt: 'Bottom 3', text: 'Manfinity Homme Men Drawstring Waist Shorts', price: '$18.99' },
        { id: 1, src: bottom4, alt: 'Bottom 4', text: 'Homme Men Solid Drawstring Waist Pants', price: '$20.99' },
        { id: 2, src: bottom5, alt: 'Bottom 5', text: 'Manfinity Mode Men Slant Pocket Bermuda', price: '$25.99' },
        { id: 3, src: bottom6, alt: 'Bottom 6', text: 'Manfinity Homme Men Drawstring Waist Shorts', price: '$18.99' },
        { id: 1, src: bottom7, alt: 'Bottom 7', text: 'Homme Men Solid Drawstring Waist Pants', price: '$20.99' },
        { id: 2, src: bottom8, alt: 'Bottom 8', text: 'Manfinity Mode Men Slant Pocket Bermuda', price: '$25.99' },
    ];

  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">BOTTOMS</div>
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

                    {bottoms.map((bottom) => (
                        <div
                            key={bottom.id}
                            className="col-md-4 each-img mb-4"
                            onClick={() => handleModalShow(bottom)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={bottom.src}
                                alt={bottom.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{bottom.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{bottom.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(bottom)}><FaCartPlus /></div>
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
export default menbottoms;
