import React, {useEffect, useState} from "react";
import {Platform, StatusBar, Text, View, Modal, Animated, TextInput, ScrollView} from "react-native";
import { useForm, Controller } from "react-hook-form";
import storage from "./storage";
import { Button, ProgressBar } from "react-native-paper";
import { main } from "../assets/styles";
import {Meal} from "../assets/types/Meal";
import {ICwiczenie} from "../assets/types";
import MealListItem from "./MealListItem";
interface IStatsProps  {
    kcal: number;
    carbs: number;
    protein: number;
    fat: number;
}

export function HomeScreen() {
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    const [breakfast, setBreakfast] = React.useState<Meal[]>([]);
    const [breakfastStats, setBreakfastStats] = useState<IStatsProps>({kcal: 0, carbs: 0,protein: 0,fat: 0});
    const [dinner, setDinner] = React.useState<Meal[]>([]);
    const [dinnerStats,setDinnerStats] = React.useState<IStatsProps>({kcal: 0, carbs: 0, protein: 0, fat: 0});
    const [supper, setSupper] = React.useState<Meal[]>([]);
    const [supperStats,setSupperStats] = React.useState<IStatsProps>({kcal: 0, carbs: 0, protein: 0, fat: 0});
    const [totalStats, setTotalStats] = React.useState<IStatsProps>({kcal: 0, carbs: 0, protein: 0, fat: 0});
    const [currentModal, setCurrentModal] = React.useState<"breakfast" | "dinner" | "supper" | "">("");
    const [currentMealName, setCurrentMealName] = React.useState("");

    const addMeal = (type: string, meal: Meal) => {
        switch (currentModal) {
            case "breakfast": {
                setBreakfast(prev => [...prev, meal]);
                setBreakfastStats(prev => (
                    {
                        protein: parseInt(prev.protein.toString()) + parseInt(meal.protein.toString()),
                        fat: parseInt(prev.fat.toString()) + parseInt(meal.fat.toString()),
                        kcal: parseInt(prev.kcal.toString()) + parseInt(meal.kcal.toString()),
                        carbs: parseInt(prev.carbs.toString()) + parseInt(meal.carbs.toString())
                    }));
                setModalVisible(false);
                control._resetDefaultValues();
                break;
            }
            case "dinner": {
                setDinner(prev => [...prev, meal]);
                setDinnerStats(prev => (
                    {
                        protein: parseInt(prev.protein.toString()) + parseInt(meal.protein.toString()),
                        fat: parseInt(prev.fat.toString()) + parseInt(meal.fat.toString()),
                        kcal: parseInt(prev.kcal.toString()) + parseInt(meal.kcal.toString()),
                        carbs: parseInt(prev.carbs.toString()) + parseInt(meal.carbs.toString())
                    }));
                setModalVisible(false);
                control._resetDefaultValues();
                break;
            }
            case "supper": {
                setSupper(prev => [...prev, meal]);
                setSupperStats(prev => (
                    {
                        protein: parseInt(prev.protein.toString()) + parseInt(meal.protein.toString()),
                        fat: parseInt(prev.fat.toString()) + parseInt(meal.fat.toString()),
                        kcal: parseInt(prev.kcal.toString()) + parseInt(meal.kcal.toString()),
                        carbs: parseInt(prev.carbs.toString()) + parseInt(meal.carbs.toString())
                    }));
                setModalVisible(false);
                control._resetDefaultValues();
            }
        }
    }

    const {register,control, handleSubmit, setValue, formState: {errors}} = useForm<Meal>({
        defaultValues: {
            name: "",
            kcal: 0,
            carbs: 0,
            protein: 0,
            fat: 0
        }
    });

    const onSubmit = handleSubmit((data) => {
        addMeal(currentModal, data);
    });

    useEffect(() => {
        setTotalStats(prev => ({
            protein: parseInt(supperStats.protein.toString()) + parseInt(breakfastStats.protein.toString()) + parseInt(dinnerStats.protein.toString()),
            fat: parseInt(supperStats.fat.toString()) + parseInt(breakfastStats.fat.toString()) + parseInt(dinnerStats.fat.toString()),
            kcal: parseInt(supperStats.kcal.toString()) + parseInt(breakfastStats.kcal.toString()) + parseInt(dinnerStats.kcal.toString()),
            carbs: parseInt(supperStats.carbs.toString()) + parseInt(breakfastStats.carbs.toString()) + parseInt(dinnerStats.carbs.toString()),
        }))
    },[breakfastStats, dinnerStats, supperStats])

    useEffect(() => {
        storage.save({
            key: "breakfast",
            data: {
                meals: breakfast
            }
        })
            .then(() => {
                setModalVisible(false);
                setCurrentMealName("");
                console.log("Posiłek dodany");
            })
            .catch(() => {console.log("Błąd podczas dodawania posiłku")})
        storage.load({key: "breakfast"}).then((res) => console.log(res));
    },[breakfast]);

    useEffect(() => {
        storage.save({
            key: "dinner",
            data: {
                meals: dinner
            }
        })
            .then(() => {
                setModalVisible(false);
                setCurrentMealName("");
                console.log("Posiłek dodany");
            })
            .catch(() => {console.log("Błąd podczas dodawania posiłku")})
        storage.load({key: "dinner"}).then((res) => console.log(res));
    },[dinner]);

    useEffect(() => {
        storage.save({
            key: "supper",
            data: {
                meals: supper
            }
        })
            .then(() => {
                setModalVisible(false);
                setCurrentMealName("");
                console.log("Posiłek dodany");
            })
            .catch(() => {console.log("Błąd podczas dodawania posiłku")})
        storage.load({key: "supper"}).then((res) => console.log(res));
    },[supper]);


    console.log(breakfastStats);

  return (
    <ScrollView style={main.container}>
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            supportedOrientations={["portrait"]}
            transparent={true}
        >
            <View style={{
                margin: 10,
                backgroundColor: '#3A3A3A',
                borderRadius: 10,
                padding: 30,
                alignItems: 'center',
            }}>
                <Text style={{color: "white"}}>Dodajesz posiłek do: {currentModal}</Text>
                <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={{padding: 5, borderWidth: 2, width: "75%", textAlign: "center", borderRadius: 13, margin: 3,color: "white", borderColor: "white"}}
                        placeholder="Nazwa"
                        onBlur={onBlur}
                        onChangeText={onChange}
                    />
                )} name="name"/>
                <View style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%"}}>
                    <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value}}) => (
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 5}}>
                            <Text style={{color: "white"}}>Kalorie</Text>
                            <TextInput
                                placeholder="0"
                                style={{color: "white", borderBottomWidth: 1, textAlign: "center", borderBottomColor: "white"}}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                keyboardType="numeric"
                            ></TextInput>
                        </View>
                    )} name="kcal"/>
                    <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value}}) => (
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 5}}>
                            <Text style={{color: "white"}}>Węglowodany</Text>
                            <TextInput
                                placeholder="0"
                                style={{color: "white", borderBottomWidth: 1, textAlign: "center", borderBottomColor: "white"}}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                keyboardType="numeric"
                            />
                        </View>
                    )} name="carbs"/>
                    <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value}}) => (
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 5}}>
                            <Text style={{color: "white"}}>Białko</Text>
                        <TextInput
                            placeholder="0"
                            style={{color: "white", borderBottomWidth: 1, textAlign: "center", borderBottomColor: "white"}}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            keyboardType="numeric"
                        />
                        </View>
                    )} name="protein"/>
                    <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value}}) => (
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 5}}>
                            <Text style={{color: "white"}}>Tłuszcz</Text>
                            <TextInput
                                placeholder="0"
                                style={{color: "white", borderBottomWidth: 1, textAlign: "center", borderBottomColor: "white"}}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                keyboardType="numeric"
                            />
                        </View>
                    )} name="fat"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-evenly"
                }}>
                    <Button onPress={() => setModalVisible(!modalVisible)}>Anuluj</Button>
                    <Button onPress={onSubmit}>Dodaj posiłek</Button>
                </View>

            </View>
        </Modal>
      <View
        style={{
          backgroundColor: "#252525",
          width: "100%",
          height: 75,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ color: "white" }}>Kalorie</Text>
          <ProgressBar
            progress={totalStats.kcal/2000}
            color={totalStats.kcal/2000 > 1 ? "red" : (totalStats.kcal/2000 > 0.80 && totalStats.kcal/2000 < 1) ? "orange": (totalStats.kcal/2000 === 1 ? "green" : "white")}
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>{totalStats.kcal}/2000kcal</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>Węglowodany</Text>
          <ProgressBar
            progress={totalStats.carbs/200}
            color={totalStats.carbs/200 > 1 ? "red" : (totalStats.carbs/200 > 0.80 && totalStats.carbs/200 < 1) ? "orange": (totalStats.carbs/200 === 1 ? "green" : "white")}
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>{totalStats.carbs}/200g</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>Białko</Text>
          <ProgressBar
            progress={totalStats.protein/150}
            color={totalStats.protein/150 > 1 ? "red" : (totalStats.protein/150 > 0.80 && totalStats.protein/150 < 1) ? "orange": (totalStats.protein/150 === 1 ? "green" : "white")}
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>{totalStats.protein}/150g</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>Tłuszcz</Text>
          <ProgressBar
            progress={totalStats.fat/75}
            color={totalStats.fat/75 > 1 ? "red" : (totalStats.fat/75 > 0.80 && totalStats.fat/75 < 1) ? "orange": (totalStats.fat/75 === 1 ? "green" : "white")}
            style={{ backgroundColor: "grey" }}
          />
          <Text style={{ color: "white" }}>{totalStats.fat}/75g</Text>
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
            flexDirection: "column",
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginVertical: 10,
          }}
        >
            <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
              <View>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Śniadanie
                </Text>
                <Text style={{ color: "white" }}>K: {breakfastStats.kcal} W: {breakfastStats.carbs} B: {breakfastStats.protein} T: {breakfastStats.fat}</Text>
              </View>
              <View>
                <Button
                    onPress={() => {
                        setModalVisible(true)
                        setCurrentModal("breakfast")
                    }}

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
            <View>
                {breakfast.map((meal) => {
                    return <MealListItem key={meal.name + Math.random()} meal={meal}/>
                })}
            </View>
        </View>
          <View
              style={{
                  backgroundColor: "#252525",
                  display: "flex",
                  flexDirection: "column",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  marginVertical: 10,
              }}
          >
              <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                  <View>
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                          Obiad
                      </Text>
                      <Text style={{ color: "white" }}>K: {dinnerStats.kcal} W: {dinnerStats.carbs} B: {dinnerStats.protein} T: {dinnerStats.fat}</Text>
                  </View>
                  <View>
                      <Button
                          onPress={() => {
                              setModalVisible(true)
                              setCurrentModal("dinner")
                          }}

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
              <View>
                  {dinner.map((meal) => {
                      return <MealListItem key={meal.name + Math.random()} meal={meal}/>
                  })}
              </View>
          </View>
          <View
              style={{
                  backgroundColor: "#252525",
                  display: "flex",
                  flexDirection: "column",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  marginVertical: 10,
              }}
          >
              <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                  <View>
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                          Kolacja
                      </Text>
                      <Text style={{ color: "white" }}>K: {supperStats.kcal} W: {supperStats.carbs} B: {supperStats.protein} T: {supperStats.fat}</Text>
                  </View>
                  <View>
                      <Button
                          onPress={() => {
                              setModalVisible(true)
                              setCurrentModal("supper")
                          }}

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
              <View>
                  {supper.map((meal) => {
                      return <MealListItem key={meal.name + Math.random()} meal={meal}/>
                  })}
              </View>
          </View>
      </View>
    </ScrollView>
  );
}
