import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Tabs from "./tabes/Tabs";

const Home = () => {
  return (
    <LinearGradient
      colors={["#3697e5", "#3679e0"]}
      start={{ y: 1, x: 0.9 }}
      //   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ height: "100%" }}>
        <View style={{ left: 15, width: '90%' }}>
          <Text style={{ color: "#e6e6e6", marginTop: 25, fontSize: 15 }}>
            Hello, James
          </Text>
          <Text
            style={{
              color: "white",
              marginTop: 10,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Let's test your knowledge
          </Text>
          {/* Search section */}
          <View
            style={{
              backgroundColor: "#e6e6e6",
              height: 36,
              borderRadius: 50,
              marginTop: 20,
            }}
          >
            <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10,}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
              <Ionicons
                name="search"
                size={20}
                color="#3679e0"
                style={{ marginRight: 10 }}
              />
              <TextInput
              placeholder="Search..."
              />
              </View>
            </View>
          </View>
        </View>
        {/* Tabs section */}
          <View style={{height: '100%', backgroundColor: 'white', marginTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <View style={{height: 2,width: 40, borderColor: "#3679e0", borderWidth: 2, alignSelf: 'center', marginTop: 15, borderRadius: 50}}></View>
         <View style={{height: '100%'}}>
            <Tabs/>
         </View>
          </View>
      </View>
    </LinearGradient>
  );
};

export default Home;
