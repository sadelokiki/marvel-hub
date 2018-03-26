import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';
import { ENCRYPTIONSECRETKEY } from './constants';

export function connectToStore(component, stateFields=null) {

  function mapStateToProps(state) {
    return getMappedState(state, stateFields)
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
  }

  function getMappedState(state, fieldsToMap) {
    let mapping = {}

    if (fieldsToMap) {
      fieldsToMap.forEach(element => {
        return mapping[element] = state[element]
      })
    }

    Object.keys(state).forEach(element => {
      return mapping[element] = state[element]
    });

    return mapping;
  }

  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export function encrypt(plainText) {
  return crypto.AES.encrypt(plainText, ENCRYPTIONSECRETKEY).toString();
}

export function decrypt(cipherText) {
  const first = crypto.AES.decrypt(cipherText.toString(), ENCRYPTIONSECRETKEY)
  return first.toString(crypto.enc.Utf8);
}
