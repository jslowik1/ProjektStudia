import { ScrollView, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { przepisy } from "../../assets/styles/przepisy";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { IPrzepis } from "../../assets/types";
import * as przepisyListaJSON from "../../assets/data/recipes.json";
import Przepis from "./Przepis";

export const Przepisy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [przepisyLista, setPrzepisyLista] = useState<IPrzepis[]>([]);
  const [founditems, setFoundItems] = useState<IPrzepis[]>([]);

  useEffect(() => {
    if (searchQuery === "") setFoundItems(przepisyLista);
    if(przepisyLista.length > 0) {
      const founditems = przepisyLista.filter((przepis) =>
          przepis.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFoundItems(founditems);
    }
  }, [searchQuery]);

  useEffect(() => {
    const string = JSON.stringify(przepisyListaJSON.przepisy);
    const parsed = JSON.parse(string) as IPrzepis[];
    parsed.sort((a,b) => a.name.localeCompare(b.name));
    setPrzepisyLista(parsed);
  },[])
  

  return (
    <View style={przepisy.container}>
      <View style={przepisy.searchBox}>
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Wyszukaj przepis"
          style={przepisy.searchBar}
        />
      </View>
      <ScrollView contentContainerStyle={przepisy.list}>
        {searchQuery.length > 0 && founditems
          ? founditems?.map((przepis: IPrzepis) => {
              return (
                <Przepis
                  key={przepis.id}
                  przepis={przepis}
                />
              );
            })
          : searchQuery.length > 0 && !founditems
          ? null
          : przepisyLista.length > 0 && przepisyLista?.map((przepis) => {
              return (
                <Przepis
                  key={przepis.id}
                  przepis={przepis}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};
