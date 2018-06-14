import React from 'react';

class ReviewIndexItem extends React.Component {
  render () {
    return (
      <li>
        <div className="review-index-item">

          <div className="review-head">
            <div className="review-title">
              <h3>{this.props.review.title}</h3>
              <p>Rating: {this.props.review.rating}</p>
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
