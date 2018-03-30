import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  marker: {
    width: 50,
    height: 50,
    borderColor: colors.white,
    borderWidth: metrics.baseBorderWidth,
    borderRadius: 25,
  },
});

export default styles;
