// import './tops.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import top1 from '../../assets/Images/women/tops/top1.jpg'
import top2 from '../../assets/Images/women/tops/top2.jpg'
import top3 from '../../assets/Images/women/tops/top3.jpg'
import top4 from '../../assets/Images/women/tops/top4.jpg'
import top5 from '../../assets/Images/women/tops/top5.jpg'
import top6 from '../../assets/Images/women/tops/top6.jpg'
import top7 from '../../assets/Images/women/tops/top7.jpg'
import top8 from '../../assets/Images/women/tops/top8.jpg'


interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const tops = () => {
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

    const tops: Dress[] = [
        { id: 1, src: top1, alt: 'Top 1', text: 'Casual White Cotton T-shirt', price: '$20.99' },
        { id: 2, src: top2, alt: 'Top 2', text: 'Striped Long Sleeve Blouse', price: '$25.99' },
        { id: 3, src: top3, alt: 'Top 3', text: 'Printed Floral Crop Top', price: '$18.99' },
        { id: 4, src: top4, alt: 'Top 4', text: 'Casual White Cotton T-shirt', price: '$20.99' },
        { id: 5, src: top5, alt: 'Top 5', text: 'Striped Long Sleeve Blouse', price: '$25.99' },
        { id: 6, src: top6, alt: 'Top 6', text: 'Printed Floral Crop Top', price: '$18.99' },
        { id: 7, src: top7, alt: 'Top 7', text: 'Casual White Cotton T-shirt', price: '$20.99' },
        { id: 8, src: top8, alt: 'Top 8', text: 'Striped Long Sleeve Blouse', price: '$25.99' },
    ];

  return (
        <>
        <div className='main-container'>
        <div className='parent-div stick'>
                <div className="women-head">TOPS</div>
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

                    {tops.map((top) => (
                        <div
                            key={top.id}
                            className="col-md-4 each-img"
                            onClick={() => handleModalShow(top)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={top.src}
                                alt={top.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{top.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{top.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(top)}><FaCartPlus /></div>
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
export default tops;
