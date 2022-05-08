import {StyleSheet, Dimensions} from 'react-native';
import {StatusBar} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height - StatusBar.currentHeight;
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: 'white'
  },

  dateContainer: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.08,
    alignItems: 'center',
    borderRadius: 15,
    top: 15,
  },

  dateText: {
    fontSize: 16,
    color: '#FFC600',
    fontWeight: 'bold',
  },

  /*
  bookingCardContainer: {
    alignSelf: 'center',
    position:'absolute',
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.2,
    top: SCREEN_HEIGHT * 0.11,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bookingButtonsContainer: {
    top: SCREEN_HEIGHT * 0.33,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  */

  bookingListContainer: {
    alignSelf: 'center',
    width: SCREEN_WIDTH * 0.99,
    height: SCREEN_HEIGHT * 0.8,
    top: SCREEN_HEIGHT * 0.12,
    backgroundColor: 'white',
  },

  bookingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    width: SCREEN_WIDTH * 0.95,
    margin: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  bookingNumberContainer: {
    backgroundColor: 'white',
    margin: 2,
  },

  bookingDetailsContainer: {
    flexDirection: 'column',
    margin: 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  bookingTimeContainer: {
    flexDirection: 'column',
    margin: 2,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  modalScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    borderRadius: 10,
  },

  modalCloseIcon: {
    marginTop: 20,
  },

  title: {
    fontSize: 14,
  },
});

export default styles;
