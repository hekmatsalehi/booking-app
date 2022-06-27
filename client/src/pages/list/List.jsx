import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import ResultList from '../../components/resultList/ResultList';
import useFetch from '../../hooks/useFetch.js';
import LoadingSpinner from '../../components/spinner/Spinner';
import './list.css';

const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [option, setOption] = useState(location.state.option);
    const [minPirce, setMinPrice] = useState(undefined);
    const [maxPirce, setMaxPrice] = useState(undefined);

    const { data, loading, error, reFetch} = useFetch(`/hotels?city=${destination}&min=${minPirce || 0}&max=${maxPirce || 1000}`)

    const handleSearch = () => {
        reFetch()
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="list-search-title">Search</h1>
                        <div className="list-search-item">
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="list-search-item">
                            <label>Check-in date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                            onChange={item => setDates([item.selection])}
                            ranges={dates}
                            minDate={new Date()}
                            />}
                        </div>
                        <div className="list-search-item">
                            <label>Options</label>
                            <div className="list-search-options">
                                <div className="options-item">
                                    <h4>Min price <small>(per night)</small></h4>
                                    <input type="number" min={1} onChange={e => setMinPrice(e.target.value)}/>
                                </div>    
                                <div className="options-item">
                                    <h4>Max price <small>(per night)</small></h4>
                                    <input type="number" min={1} onChange={e => setMaxPrice(e.target.value)}/>
                                </div>    
                                <div className="options-item">
                                    <h4>Adult</h4>
                                    <input type="number" min={1} placeholder={option.adult}/>
                                </div>    
                                <div className="options-item">
                                    <h4>Children</h4>
                                    <input type="number" min={0} placeholder={option.children}/>
                                </div>    
                                <div className="options-item">
                                    <h4>Room</h4>
                                    <input type="number" min={1} placeholder={option.room}/>
                                </div>
                            </div>    
                        </div>
                        <button className="list-search-btn" onClick={handleSearch}>Search</button>
                    </div>
                    
                    <div className="list-result">
                    {loading ? <div className="list-result-spinner"><LoadingSpinner/></div> :
                        <>
                        {data.map(item => (
                        <ResultList item={item} key={item._id}/>
                        ))}
                        </>
                    }
                    </div>
                </div>  
            </div>
        </div>
    );
}
 
export default List;