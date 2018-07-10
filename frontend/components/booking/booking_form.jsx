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
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      checkInErrors: document.getElementById("checkInErrors")
      checkOutErrors: document.getElementById("checkOutErrors")
    })
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.props.currentUser !== nextProps.currentUser) {
      this.setState({guest_id: newProps.currentUser})
    }
  }

  renderErrors() {
    return (
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleChangeStart(date) {
    if (this.state.end_date.diff(date) < 0) {
      this.state.checkInErrors.style.display = "inline-block";
      return;
    } else {
      this.state.checkInErrors.style.display = 'none';
    }
    this.setState({start_date: date});
  }

  handleChangeEnd(date) {
    if (this.state.start_date.diff(date) > 0) {
      this.state.checkOutErrors.style.display = "inline-block";
      return;
    } else {
      this.state.checkOutErrors.style.display = 'none';
    }
    this.setState({end_date: date});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleStep(stepParam) {
    return e => {
      if (stepParam === '+') {
        this.setState({ guests: (this.state.guests + 1) });
      } else if (stepParam === '-' ) {
        this.setState({ guests: (this.state.guests - 1) });
      }
    }
  }

  handleSubmit(e) {
     e.preventDefault();
     let submission = {
       start_date: this.state.start_date.format(),
       end_date: this.state.end_date.format(),
       guests: this.state.guests,
       location_id: this.state.location_id,
       guest_id: this.state.guest_id,
     }
     // this.props.createBooking(submission).then(() => this.props.history.push(`/user/${this.state.guest_id}`));
   }

  update(field) {
    return (
      e => { this.setState({[field]: e.target.value})}
    )
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="booking-form">
          <div className="booking-container-form">
            {this.renderErrors()}
            <div className="start-end-time">
              <div className="check-in-container">
                <div className="check-in-check-out-label">Check In</div>
                <DatePicker className="picker"
                  minDate={moment()}
                  maxDate={this.state.end_date}
                  selected={this.state.start_date}
                  selectsStart
                  start_date={this.state.start_date}
                  end_date={this.state.end_date}
                  onChange={this.handleChangeStart}
                  placeholderText='Select a date' />
                <p id="checkInErrors">Can't pick a check-in date after check out</p>
              </div>

              
            </div>
          </div>
        </div>
      </form>
    )
  }

}