import { ScrollView, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { przepisy } from "../styles/przepisy";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import Przepis from "./Przepis";
export const Przepisy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [przepisyLista, setPrzepisyLista] = useState<any[]>([
    {
      id: 1,
      title: "Owsianka",
      image: "https://imageplaceholder.net/600",
    },
    {
      id: 2,
      title: "Owsianka",
      image: "https://imageplaceholder.net/600",
    },
    {
      id: 3,
      title: "Gowno",
      image: "https://imageplaceholder.net/600",
    },
  ]);
  const [founditems, setFoundItems] = useState<any[]>([]);
  useEffect(() => {
    if (searchQuery === "") return;
    const founditems = przepisyLista.filter((przepis) =>
      przepis.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoundItems(founditems);
  }, [searchQuery]);
  console.log(founditems);
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
        {searchQuery.length > 0 && founditems && founditems.length
          ? founditems.map((przepis) => {
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
      </ScrollView>
    </View>
  );
};
