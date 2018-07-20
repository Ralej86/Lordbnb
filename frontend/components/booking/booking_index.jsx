import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser)
  }

  render() {
    if this.props.bookings.length < 1 {
      return (
        <div className="no-bookings">
          <p>You have no bookings!</p>
        </div>
      )
    } else {
      bookings = this.props.bookings.map( booking => {
        return (
          <BookingIndexItem
            key={booking.id}
            booking={booking}
            currentUser={this.props.currentUser}
            deleteBooking={this.props.deleteBooking}
            />
      )
    })
    return (
        <div className="bookings-container">
          <h2>Your Trips</h2>
          <div className="bookings">
            { bookings }
          </div>
        </div>
    )
    }
  }
}

export default BookingIndex;
