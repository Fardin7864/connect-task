import React from 'react';
import { Text } from 'react-native';
import { Image, View } from 'react-native';

const Logo = () => {
    return (
        <View>
            <Image source={require("../../assets/logo.png")} style={{width: 100, height: 100, alignSelf: 'center', marginBottom: 50}}/>
        </View>
    );
};

export default Logo;