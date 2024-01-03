import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text } from 'react-native';

const Home = () => {
    return (
        <LinearGradient
        colors={["#3697e5", "#3679e0"]}
        start={{ y: 1, x: 0.9 }}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
            <Text>This is Home!</Text>
        </LinearGradient>
    );
};

export default Home;