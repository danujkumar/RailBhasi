import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { categoriesData } from '../constants';
import {Delay, FromStation, Information, NearStation} from "./annoucementScreens";

function Mf(name){
  if(name == "Delay"){
    return <Delay/>;
  }else if(name == "Information"){
    return <Information/>;
  }else if(name == "From Station"){
    return <FromStation/>;
  }else{
    return <NearStation/>;
  }
}

export default function Categories() {

  const [activeSort, setActiveSort] = useState('Near station');

  return (
    <View className="space-y-1">
        <View className="flex-row justify-around items-center m-1 bg-neutral-100 rounded-xl p-1 space-x-1">
        {
          categoriesData.map((cat, index) => {
            let isActive = cat.title==activeSort;
            let activeButtonClass = isActive? 'bg-white shadow': '';
            return (
                <TouchableOpacity onPress={()=> setActiveSort(cat.title)} key={index} className={`flex items-center rounded-3xl space-y-1 p-3 ${activeButtonClass}`} style={{width: wp(26), height: wp(20) }} >
                <Image source={cat.image} className="rounded-3xl" style={{ width: wp(10), height: wp(10) }} />
                <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3), color: isActive? theme.text: 'rgba(0,0,0,0.6)' }}>{cat.title}</Text>
              </TouchableOpacity>
            )
          })
        }
        </View>
        <View>
          {Mf(activeSort)}
        </View>
    </View>
  )
}