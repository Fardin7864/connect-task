import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Details = ({ route, navigation }) => {
//   console.log(route.params?.dynamicName);
  return (
      <ScrollView style={{ height: "100%" ,backgroundColor:'white'}}>
    <LinearGradient
      colors={["#3697e5", "#3679e0"]}
      start={{ y: 1, x: 0.9 }}
      //   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
        {/* header section */}
        <View style={{ width: "90%", alignSelf: "center", flex: 1, flexDirection: 'row',justifyContent:'space-between'}}>
          <View>
          <Text
            style={{
              color: "white",
              marginTop: 10,
              fontSize: 20,
              fontWeight: "600",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {" "}
            <Text style={{ fontSize: 30 }} onPress={() => navigation.goBack()}>
              ←
            </Text>{" "}
            {route.params?.dynamicName}
          </Text>
          <Text style={{color: "#fff", left: 40, fontSize: 12}}>Get 100 Points.</Text>
          </View>
          <Text style={{alignSelf: 'center', color: 'white'}}><Text style={{fontSize: 20, color: 'gold'}}>★</Text>({route.params?.rating})</Text>
        </View>
        {/* Details section */}
        <View
          style={{
            height: "100%",
            backgroundColor: "white",
            marginTop: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View
            style={{
              height: 2,
              width: 40,
              borderColor: "#3679e0",
              borderWidth: 2,
              alignSelf: "center",
              marginTop: 15,
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{ height: "100%", marginTop: 20, paddingHorizontal: "10%" }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: "600", marginVertical: 10 }}
            >
              Brief explanation about this quiz
            </Text>
            <View style={{ gap: 10, marginBottom: 20 ,}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  source={require("../../assets/book-1294379_640.png")} // Change the path accordingly
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    backgroundColor: "gray",
                    padding: 5,
                  }}
                />
                <View>
                  <Text style={{ fontWeight: "600", fontSize: 15 }}>
                    10 Question
                  </Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    10 Point for a correct answer.
                  </Text>
                </View>
              </View>
              {/*time */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  source={require("../../assets/clock-1083479_640.png")} // Change the path accordingly
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    padding: 5,
                  }}
                />
                <View style={{}}>
                  <Text style={{ fontWeight: "600", fontSize: 15 }}>
                    {route.params?.time}
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    Total duration of the quiz.
                  </Text>
                </View>
              </View>
              {/* Reward section */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  source={require("../../assets/star-602148.png")} // Change the path accordingly
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    padding: 5,
                  }}
                />
                <View style={{}}>
                  <Text style={{ fontWeight: "600", fontSize: 15 }}>
                    Win 10 star
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    Answer all questions correctly.
                  </Text>
                </View>
              </View>
              {/* Detail tarms and condition */}
              <View style={{marginTop: 20}}>
                <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 10 }}>
                  Please read the text below carefully so you can understand it
                </Text>
                <Text style={{ fontSize: 12, color: "gray", }}>
                  10 point awarded for a correct answer and no marks for a
                  incorrect answer.
                </Text>
                <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
                  Tap on options to select the correct answer.
                </Text>
                <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
                  Tap on the bookmark icon to save interesting questions.
                </Text>
                <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
                  Click submit if you are sure you want to complete all the
                  quizzes.
                </Text>
              </View>
              <View>
                <Button title="Start" />
              </View>
            </View>
          </View>
        </View>
    </LinearGradient>
    </ScrollView>
  );
};

export default Details;
