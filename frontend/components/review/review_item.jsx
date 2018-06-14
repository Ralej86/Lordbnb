import React from 'react';

class ReviewItem extends React.Component {
  render () {
    return (
      <ul>
        <div className="review-item">
          <div className="review-head">
            <div className="review-title">
              {this.props.title}
              {this.props.rating}
            </div>
            <div className="review-user">
            </div>
          </div>
        <div className="review-body">
        </div>
      </div>
    </ul>
  )
  }
}

export default ReviewItem;

// use props for access
