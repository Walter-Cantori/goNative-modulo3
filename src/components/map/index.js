import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import * as GitUsersActions from '../../store/actions/gitUsers';


class Map extends Component {
  state ={
    coordinate: {
      latitude: null,
      longitude: null,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
    modalVisible: false,
    username: null,
  }

  openModal = (e) => {
    let { coordinate: { latitude, longitude } } = e.nativeEvent;
    this.setState({
      modalVisible: true,
      coordinate: { ...this.state.coordinate, latitude, longitude },
    });
  }

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
      <View style={styles.container}>
        
        <MapView
          initialRegion={this.props.initialRegion}
          onLongPress={e => this.openModal(e)}
          style={styles.map}
        >

          { this.props.users.map(user => (
            <Marker
              key={user.id}
              coordinate={user.coordinate}
              title={user.name || ''}
              description={user.bio || ''}
            >
              <Image
                source={{ uri: user.avatar_url }}
                style={styles.marker}
              />
            </Marker>
            ))
          }
              
        </MapView>

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

      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.gitUsers.users,
  initialRegion: state.gitUsers.initialRegion,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GitUsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
