import React from 'react';
import {View, Text, Pressable} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BOOKINGS} from '../data';
import styles from './styles';

export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        rotateEnabled={true}
        zoomEnabled={true}
        
        initialRegion={{
          latitude: 21.11298,
          longitude: 79.05968,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}>
        <Marker
          coordinate={{
            latitude: 21.11298,
            longitude: 79.05968,
          }}
          title="HOORA"
          description="Auto Care">
          <View style={styles.hooraMarkerView}>
            <MaterialCommunityIcons name="motorbike" size={40} color="black" />
          </View>
        </Marker>
        {BOOKINGS.map((customer, i) => {
          if (customer.coordinates.latitude && customer.coordinates.longitude) {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(customer.coordinates.latitude),
                  longitude: parseFloat(customer.coordinates.longitude),
                }}>
                <View style={styles.customerMarkerView}>
                  <Text style={styles.customerMarkerText}>{customer.dateTime}</Text>
                </View>
              </Marker>
            );
          }
        })}
      </MapView>

      <Pressable
        onPress={() => navigation.navigate('Income')}
        style={styles.incomeButton}>
        <Text style={styles.incomeText}>Income</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Booking')}
        style={styles.goButton}>
        <Text style={styles.goText}>GO</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Profile')}
        style={styles.profileButton}>
        <Text style={styles.profileText}>Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;
