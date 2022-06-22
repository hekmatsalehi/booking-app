import { Link } from 'react-router-dom';
import './resultList.css'

const ResultList = ({item}) => {
    return (
        <div className="result-list-container">
            <img src={item.photos[0]} alt="" className="result-list-img" />
            <div className="result-list-info">
                <h2>{item.name}</h2>
                <p>{item.distance}m from center</p>
                <span>Free airport taxi</span>
                <h3>{item.title}</h3>
                <p>{item.decribtion}</p>
                <h4>Free cancellation</h4>
                <h5>You can cancel later, so lock in this great price today!</h5>
            </div>
            <div className="result-list-details">
                {item.rating && 
                <div className="result-list-rating">
                    <h2>Excellent</h2>
                    <span>{item.rating}</span>
                </div>}
                <div className="result-list-price">
                    <h3>${item.cheapestPrice}</h3>
                    <p>Includes taxes and fees</p>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="result-list-price-btn">See availability</button>
                    </Link>
                </div> 
                
            </div>
        </div>
    );
}
 
export default ResultList;