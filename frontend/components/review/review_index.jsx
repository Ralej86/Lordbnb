import React from 'react';

import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component {

  render () {
    debugger
    return (
      <div className="review-index">
        <ul>
          {this.props.reviews.map( review =>
            <ReviewIndexItem
              key={review.id}
              currentLocation={this.props.currentLocation}
              review={review}
              users={this.props.users}
              updateReview={this.props.updateReview}
              deleteReview={this.props.deleteReview}
              />
          )}
        </ul>
      </div>
    )}
}

export default ReviewIndex;
