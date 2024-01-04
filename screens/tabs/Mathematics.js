import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback, Image } from 'react-native';
import fakeData from '../../data.json';
import { useNavigation } from '@react-navigation/native';

const Mathematics = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [courses, setCourses] = useState(null);
  const navigation = useNavigation();

  const handleNavigateToDetails = (name,time) => {
    // console.log("clicked!!")
    navigation.navigate('Details', { dynamicName: `${name}`, time: `${time}` });
    // console.log(name)
  };

  useEffect(() => {
    try {
      setCourses(fakeData.topics);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCardPress = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: 'white', paddingTop: 20 }}>
      <View style={{ flex: 1, width: '90%' }}>
        {courses?.map((topic, index) => (
          <TouchableWithoutFeedback key={topic.title} onPress= {() =>{ handleCardPress(index),handleNavigateToDetails(topic.title,topic.time)}}>
            <View
              style={{
                borderWidth: selectedCard === index ? 2 : 0,
                borderColor: 'blue',
                borderRadius: 8,
                padding: 10,
                marginBottom: 10,
              }}
            >
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: topic.img }} style={{ width: 50, height: 50 }} />
                <View style={{ marginLeft: 10 , flex: 1, flexDirection: 'row', gap: 10,}}>
                 <View style={{flexGrow: 1,width: '70%'}}>
                 <Text style={{fontSize: 15, color: '#3679e0'}}>{topic.title}</Text>
                  <Text style={{fontSize: 11}}>10 Question</Text>
                  <Text style={{fontSize: 11}}>{topic.time}</Text>
                 </View>
                  <Text style={{alignSelf: 'center'}}><Text style={{fontSize: 25, color: 'gold'}}>★</Text>({topic.rating})</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

export default Mathematics;
