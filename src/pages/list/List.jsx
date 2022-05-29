import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import ResultList from '../../components/resultList/ResultList';
import './list.css';

const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [option, setOption] = useState(location.state.option);
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
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                            onChange={item => setDate([item.selection])}
                            ranges={date}
                            minDate={new Date()}
                            />}
                        </div>
                        <div className="list-search-item">
                            <label>Options</label>
                            <div className="list-search-options">
                                <div className="options-item">
                                    <h4>Min price <small>(per night)</small></h4>
                                    <input type="number" min={1}/>
                                </div>    
                                <div className="options-item">
                                    <h4>Max price <small>(per night)</small></h4>
                                    <input type="number" min={1} />
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
                        <button className="list-search-btn">Search</button>
                    </div>
                    <div className="list-result">
                        <ResultList/>
                        <ResultList/>
                        <ResultList/>
                        <ResultList/>
                        <ResultList/>
                        <ResultList/>
                        <ResultList/>
                        <ResultList/>
                    </div>
                </div>  
            </div>
        </div>
    );
}
 
export default List;