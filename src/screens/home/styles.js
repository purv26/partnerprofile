import {StyleSheet, Dimensions} from 'react-native';
import {StatusBar} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height - StatusBar.currentHeight;
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },

  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },

  hooraMarkerView: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_WIDTH * 0.15,
    borderRadius: 26,
    backgroundColor: '#FFC600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customerMarkerView: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_WIDTH * 0.15,
    borderRadius: 26,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customerMarkerText: {
    fontSize: 15,
    color: '#FFC600',
  },

  incomeButton: {
    position: 'absolute',
    alignSelf:'center',
    backgroundColor: 'black',
    width: SCREEN_WIDTH * 0.40,
    height: SCREEN_HEIGHT * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    top: 10,
  },

  incomeText: {
    fontSize: 26,
    color: '#FFC600',
    fontWeight: 'bold',
  },

  goButton: {
    position: 'absolute',
    alignSelf:'center',
    backgroundColor: 'black',
    width: SCREEN_WIDTH * 0.20,
    height: SCREEN_WIDTH * 0.20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    bottom: 15,
  },
  
  goText: {
    fontSize: 26,
    color: '#FFC600',
    fontWeight: 'bold',
  },
  
  profileButton: {
    position: 'absolute',
    //alignSelf:'center',
    backgroundColor: 'black',
    width: SCREEN_WIDTH * 0.22,
    height: SCREEN_WIDTH * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    top: 15,
  },
  
  profileText: {
    fontSize: 26,
    color: '#FFC600',
    fontWeight: 'bold',
  },


});

export default styles;
