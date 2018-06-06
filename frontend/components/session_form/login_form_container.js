import { connect } from 'react-redux'
import sessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)
