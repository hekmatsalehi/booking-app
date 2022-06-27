import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson,  } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContex } from '../../contex/SearchContex';
import './header.css';

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ])

    const [openOption, setOpenOption] = useState(false)
    const [option, setOptions] = useState(
          {
              adult: 1,
              children: 0,
              room: 1
          }
      )
      
    const navigate = useNavigate()      
    
    const handleOption = (name, operation) => {
        setOptions((prev) =>{
            return {
                ...prev,
                [name] : operation === 'inc' ? option[name] +1 : option[name] -1
            }
        })
    }

    const {dispatch} = useContext(SearchContex);

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination, dates, option}})
        navigate('/hotels', {
            state: { destination, dates, option }
        })
    }

    return (
        <div className="header">
            <div className={type === "list" ? "header-container list-mode": "header-container" }>
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>        
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flight</span>
                    </div>        
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Rental Car</span>
                    </div>        
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>        
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi</span>
                    </div>        
                </div>

                {type !== "list" && <>
                <h1 className='header-title' >Try Our Lifetime Discount!</h1>
                <p className='header-desc'>We offer reward for each travel. Create a free acount and save 20% or more</p>
                <button className='header-button'>Login / Signup</button>

                <div className="header-search">
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faBed} className="header-icon"/>
                        <input type="text" placeholder='Enter your destination' className="header-search-input"
                        onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} 
                        className="header-icon"                        
                        />
                        <span className='header-search-text'
                        onClick={() => setOpenDate(!openDate)}
                        >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                       {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            minDate={new Date()}
                            className='date'
                        />}
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faPerson} className="header-icon"/>
                        <span className="header-search-text"
                        onClick={() => setOpenOption(!openOption)}
                        >{`${option.adult} adult ${option.children} children ${option.room} room`}</span>
                        
                        {openOption && <div className="options">
                            <div className="option-item">
                                <span>Adult</span>
                                <div className="option-btn-wrapper">
                                    <button className="option-counter-btn"
                                    disabled={option.adult <=1}
                                    onClick={() => handleOption("adult", "dec")}
                                    >-</button>
                                    <span>{option.adult}</span>
                                    <button className="option-counter-btn"
                                    onClick={() => handleOption("adult", "inc")}
                                    >+</button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span>Children</span>
                                <div className="option-btn-wrapper">
                                    <button className="option-counter-btn"
                                    disabled={option.children <= 0}
                                    onClick={() => handleOption("children", "dec")}
                                    >-</button>
                                    <span>{option.children}</span>
                                    <button className="option-counter-btn"
                                    onClick={() => handleOption("children", "inc")}
                                    >+</button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span>Room</span>
                                <div className="option-btn-wrapper">
                                    <button className="option-counter-btn"
                                    disabled={option.room <= 1}
                                    onClick={() => handleOption("room", "dec")}
                                    >-</button>
                                    <span>{option.room}</span>
                                    <button className="option-counter-btn"
                                    onClick={() => handleOption("room", "inc")}
                                    >+</button>
                                </div>
                            </div>
                        </div>}

                    </div>

                    <div className="header-search-item">
                       <button className="header-button" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
}
 
export default Header;