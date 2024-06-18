import { Image, Text, View } from "react-native";
import { przepisy } from "../../assets/styles/przepisy";
import { Component, ReactElement } from "react";
import {IPrzepis} from "../../assets/types";

const Przepis = ({przepis}: { przepis: IPrzepis }): ReactElement => {
  return (
    <View style={przepisy.przepis}>
      <View
        style={{
          padding: 20,
        }}
      >
          <Text style={{ fontWeight: "bold", fontSize: 32 }}>{przepis.name}</Text>
          <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
            <View style={{display: "flex", alignItems: "center"}}>
              <Text style={{fontWeight: "bold", padding: 1, width: 50, textAlign: "center"}}>{przepis.kcal}</Text>
              <Text style={{textAlign: "center", fontWeight: "bold", opacity: 0.5}}>Kalorie</Text>
            </View>
            <View style={{display: "flex", alignItems: "center"}}>
              <Text style={{fontWeight: "bold", padding: 1, width: 50, textAlign: "center"}}>{przepis.carbohydrates}</Text>
              <Text style={{textAlign: "center", fontWeight: "bold", opacity: 0.5}}>Węglowodany</Text>
            </View>
            <View style={{display: "flex", alignItems: "center"}}>
              <Text style={{fontWeight: "bold", padding: 1, width: 50, textAlign: "center"}}>{przepis.protein}</Text>
              <Text style={{textAlign: "center", fontWeight: "bold", opacity: 0.5}}>Białko</Text>
            </View>
            <View style={{display: "flex", alignItems: "center"}}>
              <Text style={{fontWeight: "bold", padding: 1, width: 50, textAlign: "center"}}>{przepis.fat}</Text>
              <Text style={{textAlign: "center", fontWeight: "bold", opacity: 0.5}}>Tłuszcz</Text>
            </View>
          </View>
          <Text style={{fontWeight: "bold", fontSize: 17}}>Opis</Text>
          <Text>{przepis.short_description}</Text>
          <Text style={{fontWeight: "bold", fontSize: 17}}>Przygotowanie</Text>
          <Text>{przepis.instructions}</Text>
      </View>
    </View>
  );
};

export default Przepis;
