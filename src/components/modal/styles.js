import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.basePadding,
  },

  modalBox: {
    borderRadius: metrics.baseBorderRadius,
    height: 200,
    width: '100%',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    alignItems: 'center',
  },

  modalTitle: {
    color: colors.titleBlack,
    fontWeight: 'bold',
    fontSize: 18,
  },

  modalInput: {
    marginTop: 20,
    borderColor: colors.borderGrey,
    borderWidth: 1,
    borderRadius: metrics.baseBorderRadius,
    width: '100%',
    height: 40,
  },

  modalButton: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: metrics.baseBorderRadius,
  },

  modalCancel: {
    borderRadius: metrics.baseBorderRadius,
    height: 42,
    backgroundColor: colors.borderGrey,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalSave: {
    borderRadius: metrics.baseBorderRadius,
    height: 42,
    backgroundColor: colors.buttonGreen,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default styles;

