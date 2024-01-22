import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import jump1 from '../../assets/Images/women/jumpsuits/jumpsuit1.jpg'
import jump2 from '../../assets/Images/women/jumpsuits/jumpsuit2.jpg'
import jump3 from '../../assets/Images/women/jumpsuits/jumpsuit3.jpg'
import jump4 from '../../assets/Images/women/jumpsuits/jumpsuit4.jpg'
import jump5 from '../../assets/Images/women/jumpsuits/jumpsuit5.jpg'
import jump6 from '../../assets/Images/women/jumpsuits/jumpsuit6.jpg'
import jump7 from '../../assets/Images/women/jumpsuits/jumpsuit7.jpg'
import jump8 from '../../assets/Images/women/jumpsuits/jumpsuit8.jpg'



interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const jumpsuits = () => {
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

    const jumpsuits: Dress[] = [
        { id: 1, src: jump1, alt: 'Jump 1', text: 'Frill Trim Belted Wide Leg Jumpsuit', price: '$20.99' },
        { id: 2, src: jump2, alt: 'Jump 2', text: 'Floral Print Surplice Neck Wide Leg Jumpsuit', price: '$25.99' },
        { id: 3, src: jump3, alt: 'Jump 3', text: 'Solid Button Front Tank Jumpsuit', price: '$18.99' },
        { id: 4, src: jump4, alt: 'Jump 4', text: 'Frill Trim Belted Wide Leg Jumpsuit', price: '$20.99' },
        { id: 5, src: jump5, alt: 'Jump 5', text: 'Floral Print Surplice Neck Wide Leg Jumpsuit', price: '$25.99' },
        { id: 6, src: jump6, alt: 'Jump 6', text: 'Solid Button Front Tank Jumpsuit', price: '$18.99' },
        { id: 7, src: jump7, alt: 'Jump 7', text: 'Frill Trim Belted Wide Leg Jumpsuit', price: '$20.99' },
        { id: 8, src: jump8, alt: 'Jump 8', text: 'Floral Print Surplice Neck Wide Leg Jumpsuit', price: '$25.99' },

    ];


  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">Jumpsuits</div>
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

                    {jumpsuits.map((jumpsuit) => (
                        <div
                            key={jumpsuit.id}
                            className="col-md-4 each-img"
                            onClick={() => handleModalShow(jumpsuit)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={jumpsuit.src}
                                alt={jumpsuit.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{jumpsuit.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{jumpsuit.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(jumpsuit)}><FaCartPlus /></div>
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
export default jumpsuits;
