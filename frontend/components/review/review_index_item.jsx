import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)
    // this.state = currentReview
  }
  render () {
    debugger
    return (
      <li>
        <div className="review-index-item">

          <div className="review-head">
            <div className="review-title">
              <h3>{this.props.review.title}</h3>
              <p>Rating: {this.props.review.rating}</p>
              <p>{this.props.review.created_at}</p>
            </div>
            <div className="review-user">
              <img src={this.props.users[this.props.review.author_id]['image_url']}></img>
              <p>{this.props.users[this.props.review.author_id]['name']}</p>
            </div>
          </div>
          <div className="review-body">
            <p>{this.props.review.body}</p>
          </div>
        </div>
      </li>
  )}
}

export default ReviewIndexItem;

// use props for access
