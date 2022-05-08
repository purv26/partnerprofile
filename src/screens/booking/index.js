import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  //Animated,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  Button,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import Entypo from 'react-native-vector-icons/Entypo';
import { BOOKINGS } from '../data';
import styles from './styles';

export const Booking = ({}) => {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const [count, setCount] = useState(0);

  const myListEmpty = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.item}>No Bookings Available! Try again later</Text>
      </View>
    );
  };

  const renderBookingList = ({item}) => (
    <TouchableOpacity onPress={toggleModal}>
      <View style={styles.bookingContainer}>
        <View style={styles.bookingNumberContainer}>
          <Text style={styles.title}>{item.id}</Text>
        </View>

        <View style={styles.bookingDetailsContainer}>
          <Text style={styles.title}>{item.serviceName}</Text>
          <Text style={styles.title}>
            {item.vehicle.make} {item.vehicle.model}
          </Text>
        </View>

        <View style={styles.bookingTimeContainer}>
          <Text style={styles.title}>{item.dateTime}</Text>
          <Text style={styles.title}>{item.serviceTime} mins</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  /*
  const renderBookings = () => {
    return BOOKINGS.map((item, i) => {
      return (
        <Animated.View key={i} style={styles.bookingCardContainer}>
          <Text style={styles.dateText}>{item.service}</Text>
        </Animated.View>
      );
    }).reverse();
  };
  //Booking Accept/Decline Buttons
  <View style={styles.bookingButtonsContainer}>
        <TouchableOpacity
          onPress={() => console.log('Reject!')}
          activeOpacity={0.85}>
          <SimpleLineIcons name="close" size={44} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Accept!')}
          activeOpacity={0.85}>
          <SimpleLineIcons name="check" size={44} color="green" />
        </TouchableOpacity>
      </View>
  */

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        {count != 0 && (
          <Pressable
            onPress={() => {
              setDate(new Date(year, month, day - 1));
              setCount(count - 1);
            }}>
            <SimpleLineIcons name="arrow-left" size={20} color="#FFC600" />
          </Pressable>
        )}

        <Text style={styles.dateText}>
          {date.toLocaleString().slice(0, 10)}
        </Text>

        {count != 6 && (
          <Pressable
            onPress={() => {
              setDate(new Date(year, month, day + 1));
              setCount(count + 1);
            }}>
            <SimpleLineIcons name="arrow-right" size={20} color="#FFC600" />
          </Pressable>
        )}
      </View>

      <SafeAreaView style={styles.bookingListContainer}>
        <FlatList
          data={BOOKINGS}
          keyExtractor={item => item.id}
          ListEmptyComponent={myListEmpty}
          renderItem={renderBookingList}
        />
        {modalVisible && (
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleModal}>
            <View style={styles.modalScreen}>
              <View style={styles.modalConatiner}>
                <Button title="START" />
              </View>

              <View style={styles.modalCloseIcon}>
                <Pressable onPress={toggleModal} activeOpacity={0.85}>
                  <SimpleLineIcons name="close" size={44} color="white" />
                </Pressable>
              </View>
            </View>
          </Modal>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Booking;
