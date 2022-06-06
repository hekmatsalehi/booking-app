import './featured.css'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featured-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/800px-Canyon_River_Tree_%28165872763%29.jpeg" alt="" className="featured-img" />
                <div className="featured-title">
                    <h1>Grand Canyon</h1>
                    <h2>133 properties</h2>
                </div>
            </div>
            <div className="featured-item">
                <img src="https://media.istockphoto.com/photos/downtown-salt-lake-city-skyline-cityscape-of-utah-picture-id1384369742?b=1&k=20&m=1384369742&s=170667a&w=0&h=2cB2HojYP-FnD04COXhHbJUdyuLlT1NZq7u2QI8DDV4=" alt="" className="featured-img" />
                <div className="featured-title">
                    <h1>Salt Lake City</h1>
                    <h2>222 properties</h2>
                </div>
            </div>
            <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1539209446455-bba018698d1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMHRhaG9lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="" className="featured-img" />
                <div className="featured-title">
                    <h1>Lake Tahoe</h1>
                    <h2>150 properties</h2>
                </div>
            </div>
        </div>
    );
}
 
export default Featured;