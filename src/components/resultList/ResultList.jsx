import './resultList.css'

const ResultList = () => {
    return (
        <div className="result-list-container">
            <img src="https://media.istockphoto.com/photos/luxurious-bedroom-interior-at-nigh-with-messy-bed-leather-armchairs-picture-id1300135335?b=1&k=20&m=1300135335&s=170667a&w=0&h=gTccKAt38zEmqC88LTCOME22BsDLCi9dKyRYWckBQM8=" alt="" className="result-list-img" />
            <div className="result-list-info">
                <h2>Sky Luxury Apartments</h2>
                <p>900m from center</p>
                <span>Free airport taxi</span>
                <h3>Studio Apartment with every facility</h3>
                <p>Entire studio • 1 bathroom • 29m<sup>2</sup> 1 full bed </p>
                <h4>Free cancellation</h4>
                <h5>You can cancel later, so lock in this great price today!</h5>
            </div>
            <div className="result-list-details">
                <div className="result-list-rating">
                    <h2>Excellent</h2>
                    <span>8.4</span>
                </div>
                <div className="result-list-price">
                    <h3>$112</h3>
                    <p>Includes taxes and fees</p>
                    <button>See availability</button>
                </div> 
            </div>
        </div>
    );
}
 
export default ResultList;