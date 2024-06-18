import { useEffect, useState } from "react";
import { Platform, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { cwiczenia } from "../../assets/styles/cwiczenia";
import { ICwiczenie } from "../../assets/types";
import {Exercise} from "./Exercise";
import * as exercisesJSON from "../../assets/data/exercises.json";
export const Exercises = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [founditems, setFoundItems] = useState<ICwiczenie[]>([]);
  const [cwiczeniaLista, setCwiczeniaLista] = useState<ICwiczenie[]>([]);
  useEffect(() => {
    if (searchQuery === "") setFoundItems(cwiczeniaLista);
    const founditems = cwiczeniaLista.filter((cwiczenie: ICwiczenie) =>
      cwiczenie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoundItems(founditems);
  }, [searchQuery]);

  useEffect(() => {
    const string = JSON.stringify(exercisesJSON.exercises);
    const parsed = JSON.parse(string) as ICwiczenie[];
    parsed.sort((a,b) => a.name.localeCompare(b.name));
    setCwiczeniaLista(parsed);
  },[])

  return (
    <View style={cwiczenia.container}>
      <View style={cwiczenia.searchBox}>
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Wyszukaj ćwiczenie"
          style={cwiczenia.searchBar}
        />
        </View>
        <ScrollView contentContainerStyle={cwiczenia.list}>
        {searchQuery.length > 0
          ? founditems.map((cwiczenie: ICwiczenie) => {
              return (
                <Exercise
                  key={cwiczenie.id}
                  cwi={cwiczenie}
                />
              );
            })
          : searchQuery.length > 0 && !founditems
          ? null
          : cwiczeniaLista.map((cwiczenie) => {
              return (
                <Exercise
                  key={cwiczenie.id}
                  cwi={cwiczenie}
                />
              );
            })}
        </ScrollView>
      </View>
  );
};
