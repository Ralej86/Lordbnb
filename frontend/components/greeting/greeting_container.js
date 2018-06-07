import { connect } from 'react-redux';

import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = ({session, entities: { users }}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () => dispatch(login({email:"guest@sample.com", password:"password"}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
