
import useFetch from '../../hooks/useFetch.js';
import LoadingSpinner from '../spinner/Spinner.jsx';
import './featuredProperties.css'

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")

    return (
        <div className="featured-properties">
            {loading ? <div className="featured-properties-spinner"><LoadingSpinner/></div> : 
            <>
            {data.map(item => (
            <div className="featured-properties-item" key={item._id}>
                <img src={item.photos[0]} alt="" className="featured-properties-img" />
                <div className="featured-properties-title">
                    <h2>{item.name}</h2>
                    <h3>{item.city}</h3>
                    <h4>Starting from ${item.cheapestPrice}</h4>
                    {item.rating && 
                    <div className="featured-properties-rating">
                        <span className="rating-num">{item.rating}</span>
                        <span className="rating-mark">Excellent</span>
                        <span className="rating-details">. 144 reviews</span>
                    </div>}
                </div>
            </div>
            ))}
            </>}
        </div>
    );
}
 
export default FeaturedProperties;