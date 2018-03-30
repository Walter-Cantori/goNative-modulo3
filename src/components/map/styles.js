import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalBox: {
    borderRadius: 5,
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },

  modalInput: {
    marginTop: 20,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 40,
  },

  modalButton:{ 
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },

  modalCancel: {
    borderRadius: 5,
    height: 42,
    backgroundColor: '#CCC',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalSave: {
    borderRadius: 5,
    height: 42,
    backgroundColor: '#85C47C',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  marker: {
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 25,
  }

});

export default styles;
