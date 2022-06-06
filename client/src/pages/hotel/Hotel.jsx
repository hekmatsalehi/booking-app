import { faLocationDot, faSquareCaretLeft, faSquareCaretRight, faSquareXmark,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Subscribe from '../../components/subscribe/Subscribe';
import { useState } from 'react';
import './hotel.css';


const Hotel = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            src: "https://media.istockphoto.com/photos/well-furnished-living-room-render-picture-id1217234861?b=1&k=20&m=1217234861&s=170667a&w=0&h=H5cpKtZGleLx2R1hj8ozxvhbIyZyjjdgjNnxpmViO60="
        },
        {
            src: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            src: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            src: "https://media.istockphoto.com/photos/empty-bathroom-picture-id1346631479?b=1&k=20&m=1346631479&s=170667a&w=0&h=hCD0hsci_RxrDSdmSNwYwuAUt5iphxaCs2_P4ecCxD0="
        },
        {
            src: "https://media.istockphoto.com/photos/luxury-fitness-room-picture-id183062380?b=1&k=20&m=183062380&s=170667a&w=0&h=_q5K3o-2AygcS6Ni90UFPK_PI8yBf7W6tRLtuNewh6k="
        }
      
    ]

    const [openSlider, setOpenSlider] = useState(false)
    const [slideIndex, setSlideIndex] = useState(0)

    const handleSlider = (index) => {
        setSlideIndex(index)
        setOpenSlider(true)
    }
    const handleSlideChange = (direction) => {
        let newSlideIndex;

        if (direction === "left") {
            newSlideIndex = slideIndex === 0 ? images.length - 1 : slideIndex - 1
        } else {
            newSlideIndex = slideIndex === images.length -1 ? 0 : slideIndex + 1
        }

        setSlideIndex(newSlideIndex)
    }

    return (
        <>
            {openSlider && <div className="images-slider">
                <FontAwesomeIcon icon={faSquareXmark} className="close-icon"
                onClick={() => setOpenSlider(false)}
                />
                <FontAwesomeIcon icon={faSquareCaretLeft} className="arrow-icon" onClick={() => handleSlideChange("left")} />
                <div className="slider-img-wrapper">
                    <img src={images[slideIndex].src} alt="" />
                </div>
                <FontAwesomeIcon icon={faSquareCaretRight} className="arrow-icon" onClick={()=> handleSlideChange("right")} />
            </div>}
            <Navbar/>
            <Header type="list" />
            <div className="hotel">
                <div className="hotel-container">
                    <div className="hotel-intro">
                        <div className="hotel-title-wrapper">
                            <h1>Civita Street Apartments</h1>
                            <div className="hotel-address">
                                <FontAwesomeIcon icon={faLocationDot} className="location-dot-icon"/>
                                <span>123 Millar st, San Diego, CA, 92111</span>
                            </div>
                            <h2>Excellent location - 700m from center</h2>
                            <h3>Book a stay over $200 at this property and get free airport taxi</h3>
                        </div>
                        <button className='reserve-button'>Reserve or Book Now!</button>
                    </div>
                    <div className="hotel-images">
                        {images.map((img, index) =>
                            <div className="hotel-img-wrapper" onClick={() => handleSlider(index)}>
                                <img src={img.src}/>
                            </div>
                        )}
                    </div>
                    <div className="hotel-desc-wrapper">
                        <div className="hotel-desc">
                            <h2>Stay in the heart of San Diego</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse iure quod ipsum ex sapiente aut nam nostrum neque fuga porro voluptas ducimus animi ab perferendis corporis expedita dolorem similique.
                            Similique, perspiciatis odit ad quod laborum velit numquam, dignissimos architecto temporibus blanditiis doloribus? Facere nisi aperiam, eligendi officia eos natus sint quibusdam earum neque, velit quo fuga, veritatis ipsam odit.</p>
                        </div>
                        <div className="hotel-price">
                            <h3>Perfect for a 9 night stay!</h3>
                            <p>Located in the heart of San Diego, this property has an excellent location score of 9.3!</p>
                            <span><b>$945</b> (9 nights)</span>
                            <button className='reserve-button'>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            <Subscribe/>
            <Footer/>
            </div>
        </>
    );
}
 
export default Hotel;