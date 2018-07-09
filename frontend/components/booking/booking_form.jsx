import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date = "",
      end_date = "",
      guests: 1,
      location_id: this.props.currentLocation.id,
      guest_id: this.props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
} 
