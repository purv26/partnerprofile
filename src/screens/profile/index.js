import React, {useState}from 'react';
import {View, SafeAreaView, StyleSheet,Text,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const [defaultRating,setdefaultRating]=useState(2)
  const [maxRating,setmaxRating]=useState([1,2,3,4,5])
  const starImgFilled='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
  const CustomRatingBar=() => {
    return(
      <View style={styles.customRatingBarStyle}>
      {
        maxRating.map((item,key) =>{
          return (
            <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            >
            <Image style={styles.starImgStyle}
            source={item <=defaultRating ? {uri:starImgFilled} : {uri:starImgCorner}}
            />
            </TouchableOpacity>
          )
        })
      }
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{color:"#8fbc8f",marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>@arjun</Title>
            </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
      <View>
      <Text style={{color:"#778899", marginLeft: 20,fontSize: 20,
      fontWeight: 'bold'}}>Full Name</Text>
      <Text style={styles.row} >Arjun Singh</Text>
      </View>
      
        <View >
          <Text style={{color:"#778899", marginLeft: 20,fontSize: 20,
           fontWeight: 'bold'}}>City</Text>
          <Text style={styles.row} >Nagpur, India </Text>
        </View>

        <View >
          <Text style={{color:"#778899", marginLeft: 20,fontSize: 20,
           fontWeight: 'bold'}}>phone Number</Text>
           <Text style={styles.row} >919825455362</Text>
        </View>

        <View >
          <Text style={{color:"#778899", marginLeft: 20,fontSize: 20,
           fontWeight: 'bold'}}>Vehical Name</Text>
          <Text style={styles.row} >Maruti swift </Text>
        </View>
        <View>
         <Text style={{color:"#778899", marginLeft: 20,fontSize: 20,
           fontWeight: 'bold'}}>My Review</Text>
        </View>
      </View>
     <CustomRatingBar/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    
    borderWidth:2,
    padding:10,
    marginHorizontal:20,
    marginVertical:25,
    flexDirection: 'row',
    fontSize: 20,
    
  },
  customRatingBarStyle:{
    justifyContent:'center',
    flexDirection:'row',
   
  },
  starImgStyle:{
    width:40,
    height:40,
    resizeMode:'cover'
  }
  
});






