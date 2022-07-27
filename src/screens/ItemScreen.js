import { 
  StyleSheet, 
  TouchableOpacity, Dimensions, 
  ScrollView,
  Image,
  ImageBackground, 
  Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const ItemScreen = ({navigation, route}) => {
  const {background} = route.params;


  return (
      <ScrollView>
        <Image source={background} style={appStyle.scrollStyle}/>
      </ScrollView>
  );
};

export const brokenPlayImage = (x, y) =>
  StyleSheet.create({
    position: 'absolute',
    top: x,
    left: y,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  });


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  scrollStyle: {
    width: windowWidth,
    height: windowHeight * 1.2,
    resizeMode: 'contain',
  },
  startBtn: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
  },
});

export default ItemScreen;