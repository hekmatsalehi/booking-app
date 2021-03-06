
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "./reserve.css"

export const Reserve = ({setOpen, hotelId}) => {

  const { data, loading , error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const {dates} = useContext(SearchContext);
  const navigate = useNavigate();
  
  // need to have each day
  const getDatesRange = (startDate, endDate) => {
    // create new date
    const date = new Date(startDate.getTime());

    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1)
    }
    return dates;
  }

  const allDates = getDatesRange(dates[0].startDate, dates[0].endDate);

  // check if room is available to book
  const isAvailable = (roomNum) => {
    const isFound = roomNum.unavailableDates.some((date) => {
     return allDates.includes(new Date(date).getTime())
    });
    return !isFound; // return opposit of isFound because if its true, means its unavailable
  }

  const handleCheckbox = (e) => {
    const checked = e.target.checked; // true or false
    const value = e.target.value; // room id
    // if checked is true add room id if its unchecked show only checked room
    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value));
  }

  const handleReserve = async () => {
    try {
      await Promise.all(selectedRooms.map((roomId) => {
        const response = axios.put(`/rooms/availability/${roomId}`, {
          unavailableDates:allDates
        });
        return response.data;
      }))
      setOpen(false);
      navigate("/");
    } catch (err) {

    }
  }
  return (
    <div className="reserve">
        <div className="reserve-container">
            <FontAwesomeIcon icon={faSquareXmark} 
            className="reserve-close-btn" onClick={()=> setOpen(false)}/>
            <span>Select your rooms:</span>
            {data.map(item => (
              <div className="reserve-item" key={item._id}>
                <div className="reserve-item-info">
                  <div className="reserve-item-title">{item.title}</div>
                  <div className="reserve-item-description">{item.description}</div>
                  <div className="reserve-item-max">Max People: <b>{item.maxPeople}</b></div>
                  <div className="reserve-item-price">${item.price}</div>
                </div>
                <div className="select-room-container">
                {item.roomNumbers.map(roomNumber => (
                  <div className="room" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input type="checkbox" value={roomNumber._id}
                  onChange={handleCheckbox}
                  disabled={!isAvailable(roomNumber)}
                  />
                </div>
                ))}
                </div>

              </div>
            ))}
            <button className="reserve-btn" onClick={handleReserve}>Reserve Now</button>
        </div>
    </div>
  )
}
