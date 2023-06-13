import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { gStyle } from "../styles/style";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function Collection({ route, navigation }) {
  const { collectionId, collectionName } = route.params;
  const [pairs, setPairs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [btnVisible, setbtnVisible] = useState(true);
  const [newPair, setNewPair] = useState({
    word: "",
    translate: "",
    transcription: "",
  });
  const wordInputRef = useRef(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem(collectionId);
      if (data !== null) {
        setPairs(JSON.parse(data));
      }
    } catch (error) {
      console.log("Ошибка при загрузке пар слов:", error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(collectionId, JSON.stringify(pairs));
    } catch (error) {
      console.log("Ошибка при сохранении пар слов:", error);
    }
  };

  const addPair = () => {
    setModalVisible(true);
    setbtnVisible(false);
  };

  const createPair = () => {
    if (newPair.word.length < 1 || newPair.translate.length < 1) return;

    const newPairId = Math.random().toString();

    const creatingPair = {
      id: newPairId,
      word: newPair.word,
      translate: newPair.translate,
      transcription: newPair.transcription,
    };

    setPairs((prevPairs) => [...prevPairs, creatingPair]);
    setNewPair({ word: "", translate: "", transcription: "" });
    if (wordInputRef.current) {
      wordInputRef.current.focus(); // Возврат фокуса на поле word
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setbtnVisible(true);
  };

  const shufflePairs = () => {
    const shuffledPairs = [...pairs];
    for (let i = shuffledPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPairs[i], shuffledPairs[j]] = [
        shuffledPairs[j],
        shuffledPairs[i],
      ];
    }
    setPairs(shuffledPairs);
  };

  const updatePair = (pairId, field, value) => {
    setPairs((prevPairs) =>
      prevPairs.map((pair) =>
        pair.id === pairId ? { ...pair, [field]: value } : pair
      )
    );
  };

  useEffect(() => {
    saveData();
  }, [pairs]);

  const removePair = (pairId) => {
    setPairs((prevPairs) => prevPairs.filter((pair) => pair.id !== pairId));
  };

  const renderItem = ({ item }) => (
    <View style={gStyle.list}>
      <Text>{item.word}</Text>
      <Text>{item.translate}</Text>
      <AntDesign
        name="closecircle"
        size={24}
        color="#B8860B"
        onPress={() => removePair(item.id)}
      />
    </View>
  );

  return (
    <View style={gStyle.background}>
      {btnVisible && (
        <View style={gStyle.upperBlock}>
          <TouchableOpacity style={gStyle.addPairBtn} onPress={addPair}>
            <Text style={gStyle.btnText}>Add Pair</Text>
          </TouchableOpacity>
          {pairs.length > 0 && (
            <TouchableOpacity
              style={gStyle.learnBtn}
              onPress={() => navigation.navigate("Learn", { wordPairs: pairs })}
            >
              <Text style={gStyle.btnText}>Learn</Text>
            </TouchableOpacity>
          )}
          {pairs.length > 1 && (
            <TouchableOpacity onPress={() => shufflePairs()}>
              <Foundation name="shuffle" size={34} color="#800000" />
            </TouchableOpacity>
          )}
        </View>
      )}
      <FlatList
        data={pairs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text style={gStyle.title}>No pairs available</Text>
          </View>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={gStyle.modalContainer}>
          <View style={gStyle.modalContent}>
            <Text style={gStyle.title}>Create New Pair</Text>

            <TextInput
              ref={wordInputRef}
              style={gStyle.modalInput}
              value={newPair.word}
              placeholder="Word"
              require
              onChangeText={(text) => setNewPair({ ...newPair, word: text })}
            />
            <TextInput
              style={gStyle.modalInput}
              value={newPair.translate}
              placeholder="Translate"
              onChangeText={(text) =>
                setNewPair({ ...newPair, translate: text })
              }
            />
            <TextInput
              style={gStyle.modalInput}
              value={newPair.transcription}
              placeholder="Transcription ?"
              onChangeText={(text) =>
                setNewPair({ ...newPair, transcription: text })
              }
            />
            <View style={gStyle.icons}>
              <TouchableOpacity
                style={gStyle.addPairModal}
                onPress={createPair}
              >
                <AntDesign name="checkcircle" size={34} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <AntDesign name="closecircle" size={34} color="#B22222" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
