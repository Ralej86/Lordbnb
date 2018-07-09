import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date = moment(),
      end_date = moment().add(30, 'days'),
      guests: 1,
      location_id: this.props.currentLocation.id,
      guest_id: this.props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  update(field) {
    return (
      e => { this.setState({[field]: e.target.value})}
    )
  }


}
