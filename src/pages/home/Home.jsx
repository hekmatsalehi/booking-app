import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Subscribe from '../../components/subscribe/Subscribe';
import './home.css'
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div >
            <Navbar/>
            <Header/>
            <div className="home-container">
                <Featured/>
                <h2 className="home-title">Browse by property type</h2>
                <PropertyList/>
                <h2 className="home-title">More than just hotels... Bookers discover pure comfort with homes, apartments, and more</h2>
                <FeaturedProperties/>
                <Subscribe/>
                <Footer/>
            </div>
        </div>
    );
}
 
export default Home;