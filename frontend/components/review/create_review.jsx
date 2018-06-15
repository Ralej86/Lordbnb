import React from 'react';

class CreateReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
      rating: "",
      location_id: this.props.currentLocation.id,
      author_id: this.props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (
      e => { this.setState({[field]: e.target.value})}
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  render () {
    return (
      <div className="review-form">
        <h3>Leave a Review!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              className="review-form-title"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Title"
              />
          </label>
          <label>Rating:
            <input
              className="review-form-rating"
              type="number"
              value={this.state.rating}
              onChange={this.update('rating')}
              min="1"
              max="5"
              placeholder="1 to 5"
              />
          </label>
          <label>Body:</label>
          <textarea
            className="review-form-body"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Post a review here...."
            ></textarea>
            <input className="review-form-submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default CreateReview
