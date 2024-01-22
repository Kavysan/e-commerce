// import './kids.css'
import { FaCartPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'
import kids1 from '../../assets/Images/kids/kids1.jpg'
import kids2 from '../../assets/Images/kids/kids2.jpg'
import kids3 from '../../assets/Images/kids/kids3.jpg'
import kids4 from '../../assets/Images/kids/kids4.jpg'
import kids5 from '../../assets/Images/kids/kids5.jpg'
import kids6 from '../../assets/Images/kids/kids6.jpg'
import kids7 from '../../assets/Images/kids/kids7.jpg'
import kids8 from '../../assets/Images/kids/kids8.jpg'



interface Dress {
    id: number;
    src: string;
    alt: string;
    text: string;
    price: string;
  }

const kids = () => {
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

    const kids:Dress[] = [
        { id: 1, src: kids1, alt: 'Kidds 1', text: 'Kids Tweene Girls\' Sportswear', price: '$30.99' },
        { id: 2, src: kids2, alt: 'Kidds 2', text: 'Kids Everyday Young Girl Waffle Kint Coat', price: '$40.99' },
        { id: 3, src: kids3, alt: 'Kidds 3', text: 'Kids CoolTwn Thermal Hoodie & Sweatpants', price: '$35.99' },
        { id: 4, src: kids4, alt: 'Kidds 1', text: 'Kids Charmung Floral Print Blouse & Pants', price: '$30.99' },
        { id: 5, src: kids5, alt: 'Kidds 2', text: 'Kids Floral Print Cami Top & Pants', price: '$40.99' },
        { id: 6, src: kids6, alt: 'Kidds 3', text: 'Kids Tween Girls\' Sports Streetwear Vest Set', price: '$35.99' },
        { id: 7, src: kids7, alt: 'Kidds 1', text: 'Girls Ribbed Knit Ruffle Trim Tee & Skirt', price: '$30.99' },
        { id: 8, src: kids8, alt: 'Kidds 2', text: 'Manfinity Homme Men Color Block Half Button', price: '$40.99' },
        
    ];

  return (
        <>
        <div className='main-container'>
            <div className='parent-div stick'>
                <div className="women-head">KIDS CLOTHING</div>
            </div>
            <div className="container dress-cat">
                <section id="dress" className='cat'>
                    {/* <div className='sections'>Dresses</div> */}

                    <div className="d-flex dress-section container row">

                    {kids.map((kid) => (
                        <div
                            key={kid.id}
                            className="col-md-4 each-img"
                            onClick={() => handleModalShow(kid)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={kid.src}
                                alt={kid.alt}
                                className="img-fluid"
                            />
                            <div className="d-flex text-area row">
                                <div className='col-12 text-under-dress'>{kid.text}</div>
                                <div className="cost d-flex row">
                                    <div className="dollars col-6">{kid.price}</div>
                                    <div className='col-6 cart-under-dress' onClick={() => handleModalShow(kid)}><FaCartPlus /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    {/* <Link to='/'><div className="see-all"><a href=""><MdOutlineShortText />View All</a></div></Link> */}
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
export default kids;
