import React, {ReactElement} from "react";
import {Text, View} from "react-native";
import {ICwiczenie} from "../../assets/types";
import { cwiczenia } from "../../assets/styles/cwiczenia";

const Exerc = {
    "legs": "Nogi",
    "back": "Plecy",
    "chest": "Klatka piersiowa",
    "bicep": "Biceps",
    "tricep": "Triceps",
    "shoulders": "Barki"
}

export const Exercise = ({cwi}: {cwi: ICwiczenie}): ReactElement => {
    return (
        <View style={cwiczenia.cwiczenie}>
      <View
        style={{
          padding: 20,
        }}
      >
          <Text style={{ fontWeight: "bold" }}>{Exerc[cwi.category]}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 32 }}>{cwi.name}</Text>
          <Text>Poziom: {cwi.difficulty}</Text>
          <Text>{cwi.instruction}</Text>
      </View>
    </View>
    );
}