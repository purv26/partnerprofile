import {StyleSheet} from 'react-native';
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