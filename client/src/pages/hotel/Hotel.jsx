import {
  faLocationDot,
  faSquareCaretLeft,
  faSquareCaretRight,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Subscribe from "../../components/subscribe/Subscribe";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/spinner/Spinner";
import { SearchContex } from "../../contex/SearchContex";
import "./hotel.css";

const Hotel = () => {
  // Get id using useLocation hook
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const [openSlider, setOpenSlider] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const { dates, option } = useContext(SearchContex);

  // Get the days count from the dates
  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  const getDayDifference = (date1, date2) => {
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());
    const daysDifference = Math.ceil(timeDifference / MILLISECONDS_PER_DAY);
    return daysDifference
  }

  const days = getDayDifference(dates[0].startDate, dates[0].endDate);

  const handleSlider = (index) => {
    setSlideIndex(index);
    setOpenSlider(true);
  };
  const handleSlideChange = (direction) => {
    let newSlideIndex;

    if (direction === "left") {
      newSlideIndex = slideIndex === 0 ? data.photos.length - 1 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === data.photos.length - 1 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };

  return (
    <>
      {openSlider && (
        <div className="images-slider">
          <FontAwesomeIcon
            icon={faSquareXmark}
            className="close-icon"
            onClick={() => setOpenSlider(false)}
          />
          <FontAwesomeIcon
            icon={faSquareCaretLeft}
            className="arrow-icon"
            onClick={() => handleSlideChange("left")}
          />
          <div className="slider-img-wrapper">
            <img src={data.photos[slideIndex]} alt="" />
          </div>
          <FontAwesomeIcon
            icon={faSquareCaretRight}
            className="arrow-icon"
            onClick={() => handleSlideChange("right")}
          />
        </div>
      )}
      <Navbar />
      <Header type="list" />
      <div className="hotel">
        {loading ? (
          <div className="hotel-spinner">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="hotel-container">
            <div className="hotel-intro">
              <div className="hotel-title-wrapper">
                <h1>{data.name}</h1>
                <div className="hotel-address">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="location-dot-icon"
                  />
                  <span>{data.address}</span>
                </div>
                <h2>Excellent location - {data.distance}m from center</h2>
                <h3>
                  Book a stay over ${data.cheapestPrice} at this property and get free airport
                  taxi
                </h3>
              </div>
              <button className="reserve-button">Reserve or Book Now!</button>
            </div>
            <div className="hotel-images">
              {data.photos?.map((img, index) => (
                <div
                  className="hotel-img-wrapper"
                  key={index}
                  onClick={() => handleSlider(index)}
                >
                  <img src={img} />
                </div>
              ))}
            </div>
            <div className="hotel-desc-wrapper">
              <div className="hotel-desc">
                <h2>{data.title}</h2>
                <p>{data.decribtion}</p>
              </div>
              <div className="hotel-price">
                <h3>Perfect for a {days} night stay!</h3>
                <p>
                  Located in the heart of San Diego, this property has an
                  excellent location score of 9.3!
                </p>
                <span>
                  <b>${data.cheapestPrice * days * option.room }</b> ({days} nights)
                </span>
                <button className="reserve-button">Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        )}
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
