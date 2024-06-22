import { Text, TextInput, View } from "react-native";
import { settings } from "../assets/styles/settings"
import { Controller, useForm } from "react-hook-form";
import { Limits } from "../assets/types/Limits";
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
export const SettingsScreen = () => {
  const [kcal, setKcal] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const navigation = useNavigation();
  const handleSubmit = (): void => {
      navigation.navigate("posilki", {kcal: kcal, carbs: carbs, protein: protein, fat: fat})
  } 

  useEffect(() => {
    const req = require("../assets/data/settings.json");
    const string = JSON.stringify(req.userLimits);
    const parsed = JSON.parse(string) as Limits;
    setKcal(parsed.kcal);
    setCarbs(parsed.carbs);
    setProtein(parsed.protein);
    setFat(parsed.fat);
  },[])
  return (
    <View style={settings.container}>
      <View style={settings.box}>
        <Text style={{textAlign: "center", fontWeight: "bold"}}>Cele użytkownika</Text>
        <View style={settings.values}>
          <View>
            <Text>Kalorie</Text>
              <TextInput style={{borderBottomWidth: 2, textAlign: "center"}} onChangeText={(e) => {{if(e === ""){setKcal(0)}else{setKcal(parseInt(e))}}}} defaultValue="0" value={kcal.toString()} keyboardType="numeric"/>
          </View>
          <View>
            <Text>Węglowodany</Text>
            <TextInput style={{borderBottomWidth: 2, textAlign: "center"}} onChangeText={(e) => {{if(e === ""){setCarbs(0)}else{setCarbs(parseInt(e))}}}} defaultValue="0" value={carbs.toString()} keyboardType="numeric"/>
            </View>
          <View>
            <Text>Białko</Text>
            <TextInput style={{borderBottomWidth: 2, textAlign: "center"}} onChangeText={(e) => {{if(e === ""){setProtein(0)}else{setProtein(parseInt(e))}}}} defaultValue="0" value={protein.toString()} keyboardType="numeric"/>
            </View>
          <View>
            <Text>Tłuszcz</Text>
            <TextInput style={{borderBottomWidth: 2, textAlign: "center"}} onChangeText={(e) => {{if(e === ""){setFat(0)}else{setFat(parseInt(e))}}}} defaultValue="0" value={fat.toString()} keyboardType="numeric"/>
            </View>
        </View>
        <Button onPress={() => handleSubmit()} style={{padding: 5, backgroundColor: "black", borderRadius: 0}}><Text style={{color: "white"}}>Zmień limity</Text></Button>
      </View>
    </View>
  );
};
