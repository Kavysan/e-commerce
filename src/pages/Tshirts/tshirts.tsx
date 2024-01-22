// import './tops.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import tshirt1 from '../../assets/Images/men/tshirts/tshirt1.jpg'
import tshirt2 from '../../assets/Images/men/tshirts/tshirt2.jpg'
import tshirt3 from '../../assets/Images/men/tshirts/tshirt3.jpg'
import tshirt4 from '../../assets/Images/men/tshirts/tshirt4.jpg'
import tshirt5 from '../../assets/Images/men/tshirts/tshirt5.jpg'
import tshirt6 from '../../assets/Images/men/tshirts/tshirt6.jpg'
import tshirt7 from '../../assets/Images/men/tshirts/tshirt7.jpg'
import tshirt8 from '../../assets/Images/men/tshirts/tshirt8.jpg'


interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const tshirts = () => {
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
        { id: 1, src: tshirt1, alt: 'tshirt 1', text: 'Manfinity Homme Men Two Tone Tee', price: '$30.99' },
        { id: 2, src: tshirt2, alt: 'tshirt 2', text: 'Manfinity Homme Men Color Block Half Button', price: '$40.99' },
        { id: 3, src: tshirt3, alt: 'tshirt 3', text: 'Manfinity Homme Men Cotton Astronaut Print', price: '$35.99' },
        { id: 4, src: tshirt4, alt: 'tshirt 4', text: 'Manfinity Homme Men Two Tone Tee', price: '$30.99' },
        { id: 5, src: tshirt5, alt: 'tshirt 5', text: 'Manfinity Homme Men Color Block Half Button', price: '$40.99' },
        { id: 6, src: tshirt6, alt: 'tshirt 6', text: 'Manfinity Homme Men Cotton Astronaut Print', price: '$35.99' },
        { id: 7, src: tshirt7, alt: 'tshirt 7', text: 'Manfinity Homme Men Two Tone Tee', price: '$30.99' },
        { id: 8, src: tshirt8, alt: 'tshirt 8', text: 'Manfinity Homme Men Color Block Half Button', price: '$40.99' },
    ];

  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">TSHIRTS</div>
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

                    {tshirts.map((tshirt) => (
                        <div
                            key={tshirt.id}
                            className="col-md-4 each-img"
                            onClick={() => handleModalShow(tshirt)}
                            style={{ cursor: 'pointer' }}
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
export default tshirts;
