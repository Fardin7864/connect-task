import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Populer = () => {
    useEffect(() => { 
        console.log('populer clicked!!')
     },[])
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center',}}>
            <Text style={{color: 'black', fontSize: 20}}>This is Populer!</Text>
        </View>
    );
};

export default Populer;