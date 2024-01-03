import { Icon, Input, Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Logo from "../../components/logo/Logo";
// import Logo from "../../components/logo/Logo";


const Signin = ({navigation}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const onChange = (e) => { 
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]:value
        })
     }

     const handleSubmit = () => { 
        console.log(formData)
      }

    //   console.log(navigation)

     
  return (
    <LinearGradient
      colors={["#3697e5", "#3679e0"]}
      start={{ y: 1, x: 0.9 }}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
        <Logo/>
      <View
        style={{
          width: "90%",
          padding: 20,
          borderRadius: 10,
          borderWidth: 0.5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#FF9800',
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Sign In
        </Text>
        <Input
          placeholder="Email"
          inputStyle={{ color: "white", fontSize: 13 }}
          labelStyle={{ color: "#fff", fontSize: 15 }}
          label="Email"
          placeholderTextColor="#FAE7F3"
          onChangeText={(value) => onChange({target:{name:'email',value}})}
        />
        <Input
          placeholder="Password"
          inputStyle={{ color: "white", fontSize: 13 }}
          labelStyle={{ color: "#fff", fontSize: 15 }}
          label="Password"
          placeholderTextColor="#FAE7F3"
          onChangeText={(value) => onChange({target:{name:'password',value}})}
        />
        <Button
          ViewComponent={LinearGradient} 
          linearGradientProps={{
            colors: ["#FF9800", "#F44336"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          radius={50}
          titleStyle={{fontSize: 15, fontWeight: '700'}}
          onPress={handleSubmit}
        >
         Sign In
        </Button>
        <Text style={{fontSize: 10 , color: "yellow", alignSelf: 'center', marginTop: 10}}>Don't have acount? <Text onPress={() => navigation.navigate('Signup')} style={{fontSize: 11, color: "#F44336"}}>Sign Up</Text></Text>
      </View>
    </LinearGradient>

  );
};

export default Signin;