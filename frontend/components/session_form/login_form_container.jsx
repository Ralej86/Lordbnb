import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Sign Up
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
