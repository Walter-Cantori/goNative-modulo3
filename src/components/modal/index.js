import React, { Component } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';

class AddUserModal extends Component {

  fetchGitUser = async () => {
    let user = { username, coordinate } = this.state;
    this.props.addGitUserRequest(user);

    this.setState({ username: null });
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
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

export default AddUserModal;
