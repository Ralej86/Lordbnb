import React from 'react';
import merge from 'lodash/merge';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, review: {
      id: props.review.id, location_id: props.currentLocation.id
      , author_id: props.currentUser.id, body: props.review.body
    }};
  }

  toggleEdit() {
    this.setState( { selected: !this.state.selected })
  };

  handleSubmit(e) {
    e.preventDefault()
    return this.props.updateReview(this.state.review).then(
       () => this.setState({ selected: !this.state.selected})
     )
  };

  update(e) {
    e.preventDefault()
    const currentReview = merge({}, this.state.review);
    currentReview.body = e.target.value;
    this.setState({ review: currentReview });
  }

  renderEditForm() {
    const { review } = this.state;
    return (
      <div className="review-form-box">
        <div className = "review-form">

          <div className="edit-form-cont">
            <form className="review-edit-form">

              <textarea
                value={review.comment}
                placeholder="Edit your Review"
                onChange={ e => this.update(e) }
                />
            </form>

            <div className="edit-button-options">
              <button className="btn-option" onClick={ (e) => this.handleSubmit(e)}>Update Review</button>
              <button className="btn-option" onClick={ () => this.toggleEdit()}>Cancel</button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  renderReview() {
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

          <div>
            {this.renderButtonoptions()}
          </div>
        </div>
      </li>
    )
  }

  renderButtonoptions() {
    const { currentUser, review, deleteReview } = this.props;
    if (!currentUser) {
      return <div>loading...</div>;
    }

    if (currentUser.id === review.author_id) {
      return (
        <div className="button-options">
          <button className="btn-option" onClick={() => this.toggleEdit()}>Edit Review</button>
          <button className="btn-option" onClick={() => deleteReview(review.id)}>Delete Review</button>
        </div>
      );
    }
  }



  render () {
    const { review } = this.props;
    if (this.state.selected) {
      return (
        <div>
          {this.renderEditForm()}
        </div>
      );
    } else {
      return (
        <div>
          {this.renderReview()}
        </div>
      );
    }
  }
}

export default ReviewIndexItem;

// <li>
//   <div className="review-index-item">
//
//     <div className="review-head">
//       <div className="review-title">
//         <h3>{this.props.review.title}</h3>
//         <p>Rating: {this.props.review.rating}</p>
//         <p>{this.props.review.created_at}</p>
//       </div>
//       <div className="review-user">
//         <img src={this.props.users[this.props.review.author_id]['image_url']}></img>
//         <p>{this.props.users[this.props.review.author_id]['name']}</p>
//       </div>
//     </div>
//     <div className="review-body">
//       <p>{this.props.review.body}</p>
//     </div>
//   </div>
// </li>
