import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <ul className="booking">
      <Link to={`/locations/${this.props.booking.booking.location_id}`}>
        <div className='booking-image'>
          <img src={`${this.props.booking.location.image_url}`}/>
        </div>
      </Link>
      <li className="booking-location-title">{this.props.booking.location.name}</li>
      <li className="booking-location-date">Check-in: {this.props.booking.booking.start_date}</li>
      <li className="booking-location-date">Check-out: {this.props.booking.booking.end_date}</li>
      <button onClick={() => this.props.deleteBooking(this.props.booking.booking.id)}>Delete Booking</button>
    </ul>
  )
  }
}


// const BookingIndexItem = ({ booking }) => (
//   <ul className="booking">
//     <Link to={`/locations/${booking.booking.location_id}`}>
//       <div className='booking-image'>
//         <img src={`${booking.location.image_url}`}/>
//       </div>
//     </Link>
//     <li className="booking-location-title">{booking.location.name}</li>
//     <li className="booking-location-date">Check-in: {booking.booking.start_date}</li>
//     <li className="booking-location-date">Check-out: {booking.booking.end_date}</li>
//     // <button onClick={() => this.props.deleteBooking(booking.booking.id)}>Delete Booking</button>
//     <li className="booking-delete-button">delete button goes here</li>
//   </ul>
// )

export default BookingIndexItem;
