import React from 'react';
import { connect } from 'react-redux';

import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
