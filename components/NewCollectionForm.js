import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { gStyle } from "../styles/style";
import { Formik } from "formik";

export default function NewCollectionForm({ navigation }) {
  const addCollection = async (collectionName) => {
    try {
        const collections = await AsyncStorage.getItem('collections');
        let parsedCollections = [];
        if (collections != null) {
            parsedCollections = JSON.parse(collections);
        }

        const newCollection = {
            id: Math.random().toString(),
            name: collectionName,
            pairs: []
        };

        parsedCollections.push(newCollection);

        await AsyncStorage.setItem('collections', JSON.stringify(parsedCollections));
        console.log('New collection saved');
        navigation.navigate('CollectionList');
    } catch (error) {
        console.log('Error: ', error)
    }
  };

  return (
    <View style={gStyle.main}>
      <Formik
        initialValues={{ collectionName: '' }}
        onSubmit={(values) => {
          addCollection(values.collectionName);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.collectionName}
              placeholder="Enter name of collection"
              onChangeText={props.handleChange("collectionName")}
            />
            <TouchableOpacity style={gStyle.addCollectionBtn} onPress={props.handleSubmit}>
              <Text style={gStyle.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: "#B8860B",
    borderRadius: 5,
  },
});
