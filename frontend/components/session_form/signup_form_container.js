import { connect } from 'react-redux'
import sessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign up'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)
