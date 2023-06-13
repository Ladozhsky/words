import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { gStyle } from "../styles/style";
import { AntDesign } from "@expo/vector-icons";
import NewCollectionForm from "./NewCollectionForm";

export default function Main({ navigation }) {
//   const addCollection = (article) => {
//     setNews((list) => {
//       article.key = Math.random().toString();
//       return [article, ...list];
//     });
//     setModalWindow(false);
//   };

  return (
    <View style={gStyle.main}>
      <TouchableOpacity style={gStyle.btn} onPress={() => navigation.navigate('NewCollectionForm')}>
        <Text style={gStyle.btnText}>New Collection</Text>
      </TouchableOpacity>
      <TouchableOpacity style={gStyle.btn} onPress={() => navigation.navigate('CollectionList')}>
        <Text style={gStyle.btnText}>Collections</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  item: {
    //width: '100%',
    marginBottom: 30,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontFamily: "SyneMono",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "SyneMono",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
});
