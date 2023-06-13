import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { gStyle } from "../styles/style";
import { AntDesign } from "@expo/vector-icons";

export default function CollectionList({ navigation }) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("collections");
      if (data !== null) {
        setCollections(JSON.parse(data));
      }
    } catch (error) {
      console.log("Ошибка при загрузке коллекций:", error);
    }
  };

  const removeCollection = async (id) => {
    try {
      // Получение текущих коллекций из хранилища
      const data = await AsyncStorage.getItem("collections");
      if (data !== null) {
        const collections = JSON.parse(data);

        // Фильтрация коллекций для удаления коллекции с заданным id
        const updatedCollections = collections.filter(
          (collection) => collection.id !== id
        );

        // Обновление хранилища с новым списком коллекций
        await AsyncStorage.setItem(
          "collections",
          JSON.stringify(updatedCollections)
        );

        // Обновление состояния компонента
        setCollections(updatedCollections);
      }
    } catch (error) {
      console.log("Ошибка при удалении коллекции:", error);
    }
  };

  const handleCollectionPress = (collectionId, collectionName) => {
    navigation.navigate("Collection", { collectionId, collectionName });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => handleCollectionPress(item.id, item.name)}
    >
      <View style={gStyle.list}>
        <Text style={gStyle.textList}>{item.name}</Text>
        <AntDesign
          name="closecircle"
          size={24}
          color="#B8860B"
          onPress={() => removeCollection(item.id)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={gStyle.background}>
      <FlatList
        data={collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={{ paddingTop: '50%' }}>
            <Text style={gStyle.title}>List is empty</Text>
          </View>
        )}
      />
    </View>
  );
}
