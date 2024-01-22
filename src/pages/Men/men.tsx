import './men.css'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineShortText } from "react-icons/md";
import { useState } from 'react'
import tshirt1 from '../../assets/Images/men/tshirts/tshirt1.jpg'
import tshirt2 from '../../assets/Images/men/tshirts/tshirt2.jpg'
import tshirt3 from '../../assets/Images/men/tshirts/tshirt3.jpg'
import outwear1 from '../../assets/Images/men/outwear/outwear1.jpg'
import outwear2 from '../../assets/Images/men/outwear/outwear2.jpg'
import outwear3 from '../../assets/Images/men/outwear/outwear3.jpg'
import bottom1 from '../../assets/Images/men/bottom/bottom1.jpg'
import bottom2 from '../../assets/Images/men/bottom/bottom2.jpg'
import bottom3 from '../../assets/Images/men/bottom/bottom3.jpg'
import hood1 from '../../assets/Images/men/hoodies/hood1.jpg'
import hood2 from '../../assets/Images/men/hoodies/hood2.jpg'
import hood3 from '../../assets/Images/men/hoodies/hood3.jpg'



interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const men = () => {
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

    const tshirts:Dress[] = [
        { id: 1, src: tshirt1, alt: 'tshirt 1', text: 'Manfinity Homme Men Two Tone Tee', price: '$30.99' },
        { id: 2, src: tshirt2, alt: 'tshirt 2', text: 'Manfinity Homme Men Color Block Half Button', price: '$40.99' },
        { id: 3, src: tshirt3, alt: 'tshirt 3', text: 'Manfinity Homme Men Cotton Astronaut Print', price: '$35.99' },
    ];
    const outwears: Dress[] = [
        { id: 1, src: outwear1, alt: 'outwear 1', text: 'Manfinity Homme Men\'s Flap Pocket Jacket', price: '$20.99' },
        { id: 2, src: outwear2, alt: 'outwear 2', text: 'Manfinity Men Plaid Print Drawstring Hood', price: '$25.99' },
        { id: 3, src: outwear3, alt: 'outwear 3', text: 'Manfinity Homme Men Solid Zip Up Overcoat', price: '$18.99' },
    ];
    const bottoms: Dress[] = [
        { id: 1, src: bottom1, alt: 'Bottom 1', text: 'Homme Men Solid Drawstring Waist Pants', price: '$20.99' },
        { id: 2, src: bottom2, alt: 'Bottom 2', text: 'Manfinity Mode Men Slant Pocket Bermuda', price: '$25.99' },
        { id: 3, src: bottom3, alt: 'Bottom 3', text: 'Manfinity Homme Men Drawstring Waist Shorts', price: '$18.99' },
    ];
    const hoods: Dress[] = [
        { id: 1, src: hood1, alt: 'Hood 1', text: 'Deer & Slogan Graphic Kangaroo Pocket Hoodie', price: '$20.99' },
        { id: 2, src: hood2, alt: 'Hood 2', text: 'Men Baseball Print Kangaroo Pocket Hoodie', price: '$25.99' },
        { id: 3, src: hood3, alt: 'Hood 3', text: 'Manfinity Hypemode Zip Up Drawstring Hood', price: '$18.99' },
    ];

  return (
        <>
        <div className='main-container'>
            <div className='parent-div stick'>
                <div className="women-head">MEN CLOTHING</div>
                <div className='women-cat'>   
                    <ul className="list-unstyled d-flex col justify-content-center">
                        <li className="me-3">
                            <Link to='/tshirts' className="nav-link">Tshirts</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/outwears' className="nav-link">Outwear</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/menbottoms' className="nav-link">Bottoms</Link>
                        </li>
                        <li className="me-3">
                            <Link to='/hoods' className="nav-link">Hoodie</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container dress-cat">
                <section id="dress" className='cat'>
                    <div className='sections'>Tshirts</div>

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
                    <Link to='/tshirts'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>
                <section id="outwears" className="cat">
                    <div className="sections">Outwear</div>
                    <div className="d-flex dress-section container row">
                    {outwears.map((outwear) => (
                        <div
                        key={outwear.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(outwear)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={outwear.src} alt={outwear.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{outwear.text}</div>
                            <div className="cost d-flex row">
                            <div className="dollars col-6">{outwear.price}</div>
                            <div className='col-6 cart-under-dress' onClick={() => handleModalShow(outwear)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/outwears'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>                
                <section id="bottoms" className="cat">
                    <div className="sections">Bottoms</div>
                    <div className="d-flex dress-section container row">
                    {bottoms.map((bottom) => (
                        <div
                        key={bottom.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(bottom)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={bottom.src} alt={bottom.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{bottom.text}</div>
                            <div className="cost d-flex row">
                            <div className="dollars col-6">{bottom.price}</div>
                            <div className='col-6 cart-under-dress' onClick={() => handleModalShow(bottom)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/menbottoms'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>
                <section id="hoods" className="cat">
                    <div className="sections">Hoodies</div>
                    <div className="d-flex dress-section container row">
                    {hoods.map((hood) => (
                        <div
                        key={hood.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(hood)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={hood.src} alt={hood.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{hood.text}</div>
                            <div className="cost d-flex row">
                            <div className="dollars col-6">{hood.price}</div>
                            <div className='col-6 cart-under-dress' onClick={() => handleModalShow(hood)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/hoods'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>

                
            <Modal show={showModal} onHide={handleModalClose}>
                {/* <Modal.Header >
                    <Modal.Title>{selectedDress?.text}</Modal.Title>
                </Modal.Header> */}
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
export default men;
