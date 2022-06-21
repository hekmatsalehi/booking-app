import useFetch from '../../hooks/useFetch.js';
import './featured.css'

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=San%20Diego,Seattle,Salt%20Lake%20City")
    return (
        <div className="featured">
            { loading ? <div>Loading...</div> :
            <>
            <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1617142584114-730e9bda61b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FuJTIwZGllZ28lMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featured-img" />
                <div className="featured-title">
                    <h1>San Diego</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1516901632977-d141a38d469b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYXR0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="featured-img" />
                <div className="featured-title">
                    <h1>Seattle</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featured-item">
                <img src="https://media.istockphoto.com/photos/downtown-salt-lake-city-skyline-cityscape-of-utah-picture-id1384369742?b=1&k=20&m=1384369742&s=170667a&w=0&h=2cB2HojYP-FnD04COXhHbJUdyuLlT1NZq7u2QI8DDV4=" alt="" className="featured-img" />
                <div className="featured-title">
                    <h1>Salt Lake City</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
            </>
            }
        </div>
    );
}
 
export default Featured;