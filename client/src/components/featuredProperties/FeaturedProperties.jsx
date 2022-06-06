
import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="featured-properties">
            <div className="featured-properties-item">
                <img src="https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?b=1&k=20&m=1182454657&s=170667a&w=0&h=Fx0O5rXSnfUjvt-ZdPKYovdq-_Mbkn90DJq1evHPesI=" alt="" className="featured-properties-img" />
                <div className="featured-properties-title">
                    <h2>Civita Apartments</h2>
                    <h3>Los Angeles</h3>
                    <h4>Starting from $180</h4>
                    <div className="featured-properties-rating">
                        <span className="rating-num">8.1</span>
                        <span className="rating-mark">Excellent</span>
                        <span className="rating-details">. 144 reviews</span>
                    </div>
                </div>
            </div>
            <div className="featured-properties-item">
                <img src="https://media.istockphoto.com/photos/trendy-open-floor-plan-idea-picture-id611895696?b=1&k=20&m=611895696&s=170667a&w=0&h=DqmiDCoKfAyyuy5CRyGYm_qtfG2mGQm1z1Y0ha6dCm8=" alt="" className="featured-properties-img" />
                <div className="featured-properties-title">
                    <h2>ABC Apartments</h2>
                    <h3>San Diego</h3>
                    <h4>Starting from $190</h4>
                    <div className="featured-properties-rating">
                        <span className="rating-num">9.1</span>
                        <span className="rating-mark">Awesome</span>
                        <span className="rating-details">. 333 reviews</span>
                    </div>
                </div>
            </div>
            <div className="featured-properties-item">
                <img src="https://media.istockphoto.com/photos/interior-of-living-room-with-furniture-picture-id1257213521?b=1&k=20&m=1257213521&s=170667a&w=0&h=J6aQCWtuA1lmUIw_KmXiVhVu_SPbYCEdGpuoe8sXSjw=" alt="" className="featured-properties-img" />
                <div className="featured-properties-title">
                    <h2>Stylus Apartments</h2>
                    <h3>Seattle</h3>
                    <h4>Starting from $250</h4>
                    <div className="featured-properties-rating">
                        <span className="rating-num">9.4</span>
                        <span className="rating-mark">Awesome</span>
                        <span className="rating-details">. 344 reviews</span>
                    </div>
                </div>
            </div>
            <div className="featured-properties-item">
                <img src="https://images.unsplash.com/photo-1621891333819-00c206ec8994?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc2lkZSUyMGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" className="featured-properties-img" />
                <div className="featured-properties-title">
                    <h2>Sunset view Apartments</h2>
                    <h3>New York</h3>
                    <h4>Starting from $350</h4>
                    <div className="featured-properties-rating">
                        <span className="rating-num">9.9</span>
                        <span className="rating-mark">Awesome</span>
                        <span className="rating-details">. 134 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FeaturedProperties;