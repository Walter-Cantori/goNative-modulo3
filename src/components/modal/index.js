import React, { Component } from 'react';
import { Modal, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import * as GitUserActions from '../../store/actions/gitUsers';

class AddUserModal extends Component {
  static propTypes = {
    addGitUserRequest: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    visibility: PropTypes.bool.isRequired,
  };
  state = {
    username: null,
  };

  fetchGitUser = async () => {
    this.props.addGitUserRequest(this.state.username);
    this.setState({ username: null });
    this.closeModal();
  }

  closeModal = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visibility}
        onRequestClose={this.closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Adicionar Novo Local</Text>
            <TextInput
              style={styles.modalInput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usúario no Github"
              underlineColorAndroid="transparent"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />

            <View style={styles.modalButton}>
              <TouchableOpacity style={styles.modalCancel} onPress={this.closeModal}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalSave} onPress={this.fetchGitUser}>
                <Text>Salvar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(GitUserActions, dispatch);

const mapStateToProps = state => ({
  visibility: state.gitUsers.visibility,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);

