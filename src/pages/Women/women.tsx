import './women.css'
import { Link } from 'react-router-dom'
import dress1 from '../../assets/Images/women/dresses/dress1.jpg'
import dress2 from '../../assets/Images/women/dresses/dress2.jpg'
import dress3 from '../../assets/Images/women/dresses/dress3.jpg'
import top1 from '../../assets/Images/women/tops/top1.jpg'
import top2 from '../../assets/Images/women/tops/top2.jpg'
import top3 from '../../assets/Images/women/tops/top3.jpg'
import sweat1 from '../../assets/Images/women/sweaters/sweater1.jpg'
import sweat2 from '../../assets/Images/women/sweaters/sweater2.jpg'
import sweat3 from '../../assets/Images/women/sweaters/sweater3.jpg'
import bottom1 from '../../assets/Images/women/bottoms/bottom1.jpg'
import bottom2 from '../../assets/Images/women/bottoms/bottom4.jpg'
import bottom3 from '../../assets/Images/women/bottoms/bottom3.jpg'
import jump1 from '../../assets/Images/women/jumpsuits/jumpsuit1.jpg'
import jump2 from '../../assets/Images/women/jumpsuits/jumpsuit2.jpg'
import jump3 from '../../assets/Images/women/jumpsuits/jumpsuit3.jpg'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineShortText } from "react-icons/md";
import { useState } from 'react'

interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const women = () => {
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
    ];
    const tops: Dress[] = [
        { id: 1, src: top1, alt: 'Top 1', text: 'Casual White Cotton T-shirt', price: '$20.99' },
        { id: 2, src: top2, alt: 'Top 2', text: 'Striped Long Sleeve Blouse', price: '$25.99' },
        { id: 3, src: top3, alt: 'Top 3', text: 'Printed Floral Crop Top', price: '$18.99' },
    ];
    const sweatshirts: Dress[] = [
        { id: 1, src: sweat1, alt: 'Sweatshirt 1', text: 'Embroidry Letter Pattern Oversized Pullover', price: '$20.99' },
        { id: 2, src: sweat2, alt: 'Sweatshirt 2', text: 'Half Zip Drop Shoulder Sweatshirt', price: '$25.99' },
        { id: 3, src: sweat3, alt: 'Sweatshirt 3', text: 'Stripped Pattern Drop Shoulder Sweater', price: '$18.99' },
    ];
    const bottoms: Dress[] = [
        // TODO CHANGE DESCRIPTION
        { id: 1, src: bottom1, alt: 'Bottom 1', text: 'Embroidry Letter Pattern Oversized Pullover', price: '$20.99' },
        { id: 2, src: bottom2, alt: 'Bottom 2', text: 'Half Zip Drop Shoulder Sweatshirt', price: '$25.99' },
        { id: 3, src: bottom3, alt: 'Bottom 3', text: 'Stripped Pattern Drop Shoulder Sweater', price: '$18.99' },
    ];
    const jumpsuits: Dress[] = [
        { id: 1, src: jump1, alt: 'Jump 1', text: 'Frill Trim Belted Wide Leg Jumpsuit', price: '$20.99' },
        { id: 2, src: jump2, alt: 'Jump 2', text: 'Floral Print Surplice Neck Wide Leg Jumpsuit', price: '$25.99' },
        { id: 3, src: jump3, alt: 'Jump 3', text: 'Solid Button Front Tank Jumpsuit', price: '$18.99' },
    ];

  return (
        <>
        <div className='main-container'>
            <div className='parent-div stick'>
                <div className="women-head">WOMEN CLOTHING</div>
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
                <section id="dress" className="cat">
                    <div className="sections">Dresses</div>
                    <div className="d-flex dress-section container row">
                    {dresses.map((dress) => (
                        <div
                        key={dress.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(dress)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={dress.src} alt={dress.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{dress.text}</div>
                            <div className="cost d-flex row">
                                <div className="dollars col-6">{dress.price}</div>
                                <div className='col-6 cart-under-dress' onClick={() => handleModalShow(dress)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/dresses'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>             
                <section id="top" className="cat">
                    <div className="sections">Tops</div>
                    <div className="d-flex dress-section container row">
                    {tops.map((top) => (
                        <div
                        key={top.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(top)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={top.src} alt={top.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{top.text}</div>
                            <div className="cost d-flex row">
                            <div className="dollars col-6">{top.price}</div>
                            <div className='col-6 cart-under-dress' onClick={() => handleModalShow(top)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/tops'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>                
                <section id="sweatshirt" className="cat">
                    <div className="sections">Sweatshirts</div>
                    <div className="d-flex dress-section container row">
                    {sweatshirts.map((sweatshirt) => (
                        <div
                        key={sweatshirt.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(sweatshirt)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={sweatshirt.src} alt={sweatshirt.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{sweatshirt.text}</div>
                            <div className="cost d-flex row">
                            <div className="dollars col-6">{sweatshirt.price}</div>
                            <div className='col-6 cart-under-dress' onClick={() => handleModalShow(sweatshirt)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/sweatshirts'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
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
                    <Link to='/bottoms'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
                </section>
                <section id="jumpsuits" className="cat">
                    <div className="sections">Jumpsuits</div>
                    <div className="d-flex dress-section container row">
                    {jumpsuits.map((jumpsuit) => (
                        <div
                        key={jumpsuit.id}
                        className="col-md-4 "
                        onClick={() => handleModalShow(jumpsuit)}
                        style={{ cursor: 'pointer' }}
                        >
                        <img src={jumpsuit.src} alt={jumpsuit.alt} className="img-fluid" />
                        <div className="d-flex text-area row">
                            <div className="col-12 text-under-dress">{jumpsuit.text}</div>
                            <div className="cost d-flex row">
                            <div className="dollars col-6">{jumpsuit.price}</div>
                            <div className='col-6 cart-under-dress' onClick={() => handleModalShow(jumpsuit)}><FaCartPlus /></div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <Link to='/jumpsuits'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link>
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
export default women;
