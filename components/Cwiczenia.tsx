import { useEffect, useState } from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { cwiczenia } from "../assets/styles/cwiczenia";
import { ICwiczenie } from "../assets/types";

export const Cwiczenia = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [founditems, setFoundItems] = useState<ICwiczenie[]>([]);
  const [cwiczeniaLista, setCwiczeniaLista] = useState<ICwiczenie[]>([
    {
      id: 1,
      kategoria: "Klatka",
      nazwa: "Wyciskanie sztangi leżąc",
      opis: "Wyciskanie sztangi leżąc",
    },
    {
      id: 2,
      kategoria: "Barki",
      nazwa: "Wyciskanie hantli nad głowę",
      opis: "Wyciskanie hantli nad głowę",
    },
  ]);
  useEffect(() => {
    if (searchQuery === "") setFoundItems(cwiczeniaLista);
    const founditems = cwiczeniaLista.filter((cwiczenie: ICwiczenie) =>
      cwiczenie.nazwa.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoundItems(founditems);
  }, [searchQuery]);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={cwiczenia.searchBox}>
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Wyszukaj ćwiczenie"
          style={cwiczenia.searchBar}
        />
        {searchQuery.length > 0
          ? founditems.map((przepis: ICwiczenie) => {
              return (
                <Przepis
                  key={przepis.id}
                  title={przepis.title}
                  image={przepis.image}
                />
              );
            })
          : searchQuery.length > 0 && !founditems
          ? null
          : przepisyLista.map((przepis) => {
              return (
                <Przepis
                  key={przepis.id}
                  title={przepis.title}
                  image={przepis.image}
                />
              );
            })}
      </View>
    </SafeAreaView>
  );
};
