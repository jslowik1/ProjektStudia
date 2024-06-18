
import {Meal} from "../assets/types/Meal";
import {View} from "react-native";
import React from "react";
import {Text} from "react-native-paper";

export const MealListItem = ({meal}: {meal: Meal}) => {
    return (
        <View style={{backgroundColor: "#3A3A3A", padding: 5, marginTop: 10, marginBottom: 2, borderRadius: 13}}>
            <Text style={{color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold"}}>{meal.name}</Text>
            <Text style={{color: "white", textAlign: "center"}}>KCAL: {meal.kcal} Węglowodany: {meal.carbs} Białko: {meal.protein} Tłuszcz: {meal.fat}</Text>
        </View>
    );
};
export default MealListItem;
