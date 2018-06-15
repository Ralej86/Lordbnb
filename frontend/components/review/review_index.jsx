import React from 'react';

import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component {


  render () {
    console.log(this.props.currentLocation);
    debugger
    if (!this.props.currentLocation) {
      return "IM NOT RENDERING";
    }

    return (
      <div className="review-index">
        <ul>
          {this.props.reviews.map( review =>
            <ReviewIndexItem
              key={review.id}
              currentLocation={this.props.currentLocation}
              review={review}
              users={this.props.users}
              currentUser={this.props.currentUser}
              updateReview={this.props.updateReview}
              deleteReview={this.props.deleteReview}
              />
          )}
        </ul>
      </div>
    )}
}

export default ReviewIndex;
