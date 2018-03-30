import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import * as GitUsersActions from '../../store/actions/gitUsers';
import AddUsersModal from '../modal';


class Map extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    initialRegion: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      latitudeDelta: PropTypes.number.isRequired,
      longitudeDelta: PropTypes.number.isRequired,
    }).isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      coordinate: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        latitudeDelta: PropTypes.number.isRequired,
        longitudeDelta: PropTypes.number.isRequired,
      }),
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    })).isRequired,
  }

  openModal = (e) => {
    let { coordinate: { latitude, longitude } } = e.nativeEvent;
    this.props.openModal({
      latitude,
      longitude,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.props.error &&
          Alert.alert(
            'Erro',
            'Usuário não encontrado',
            [
              { text: 'OK' },
            ],
            { cancelable: false },
          )
        }

        <MapView
          initialRegion={this.props.initialRegion}
          onLongPress={e => this.openModal(e)}
          style={styles.map}
        >

          { this.props.users.length > 0 && this.props.users.map(user => (
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

        <AddUsersModal />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.gitUsers.users,
  initialRegion: state.gitUsers.initialRegion,
  error: state.gitUsers.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GitUsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
