import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/style";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Learn({ route, navigation }) {
  const { wordPairs } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordOrTranslate, setWordOrTranslate] = useState(true);
  const [questionMark, setQuestionMark] = useState(false);

  const handleNext = () => {
    if (currentIndex < wordPairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setQuestionMark(false);
    }
  };

  const chanhgeQuestionMark = () => {
    setQuestionMark(!questionMark);
  };

  const changeWordOrTranslate = () => {
    setWordOrTranslate(!wordOrTranslate);
    setQuestionMark(false);
  };

  const showTranscription = (index) => {
    if (index === currentIndex) {
      setWordOrTranslate(!wordOrTranslate);
    }
  };

  const { word, translate, transcription } = wordPairs[currentIndex];

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={gStyle.learnMain}>
      {questionMark ? (
        <TouchableOpacity style={gStyle.card} onPress={chanhgeQuestionMark}>
          <Text style={gStyle.word}>{transcription}</Text>
          <FontAwesome
            name="exchange"
            size={24}
            color="black"
            style={gStyle.switchIcon}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={gStyle.card} onPress={changeWordOrTranslate}>
          {wordOrTranslate ? (
            <Text style={gStyle.word}>{word}</Text>
          ) : (
            <Text style={gStyle.word}>{translate}</Text>
          )}
          {transcription && (
            <TouchableOpacity
              style={gStyle.questionMark}
              onPress={chanhgeQuestionMark}
            >
              <AntDesign name="questioncircleo" size={35} color="black" />
            </TouchableOpacity>
          )}
          <FontAwesome
            name="exchange"
            size={24}
            color="black"
            style={gStyle.switchIcon}
          />    
        </TouchableOpacity>
      )}

      {currentIndex < wordPairs.length - 1 ? (
        <TouchableOpacity onPress={handleNext}>
          <Entypo name="arrow-bold-right" size={70} color="#6B8E23" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={gStyle.end} onPress={goBack}>
          <Text style={[gStyle.title, { paddingTop: 20 }]}>Great job!</Text>
          <AntDesign name="back" size={40} color="black" />
        </TouchableOpacity>
      )}
      {/* <TouchableOpacity style={gStyle.switchBtn}>
        <MaterialIcons
          name="published-with-changes"
          size={50}
          color="#6B8E23"
          onPress={changeWordOrTranslate}
        />
      </TouchableOpacity> */}
    </View>
  );
}
