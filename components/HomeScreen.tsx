import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import { Button, ProgressBar } from "react-native-paper";
import { main } from "../assets/styles";
export function HomeScreen() {
  return (
    <View style={main.container}>
      <View
        style={{
          backgroundColor: "#252525",
          width: "100%",
          height: 75,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ color: "white" }}>Kalorie</Text>
          <ProgressBar
            progress={0.75}
            color="white"
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>0/2000kcal</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>Węglowodany</Text>
          <ProgressBar
            progress={0.75}
            color="white"
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>0/200g</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>Białko</Text>
          <ProgressBar
            progress={0.25}
            color="white"
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>0/150g</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>Tłuszcz</Text>
          <ProgressBar
            progress={0.75}
            color="white"
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>0/75g</Text>
        </View>
      </View>
      <View
        id="posilki"
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          paddingTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "#252525",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Śniadanie
            </Text>
            <Text style={{ color: "white" }}>K: 0 W: 0 B: 0 T: 0</Text>
          </View>
          <View>
            <Button
              style={{
                backgroundColor: "#FF6F6F",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Dodaj posiłek
              </Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#252525",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Śniadanie
            </Text>
            <Text style={{ color: "white" }}>K: 0 W: 0 B: 0 T: 0</Text>
          </View>
          <View>
            <Button
              style={{
                backgroundColor: "#FF6F6F",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Dodaj posiłek
              </Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#252525",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Śniadanie
            </Text>
            <Text style={{ color: "white" }}>K: 0 W: 0 B: 0 T: 0</Text>
          </View>
          <View>
            <Button
              style={{
                backgroundColor: "#FF6F6F",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Dodaj posiłek
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
