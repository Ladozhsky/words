import React from "react";
import Main from "./components/Main";
import NewCollectionForm from "./components/NewCollectionForm";
import CollectionList from "./components/CollectionsList";
import Collection from "./components/Collection";
import Learn from "./components/Learn";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main",
            headerStyle: { backgroundColor: "#B8860B", height: 100 },
            headerTitleStyle: { fontFamily: 'SyneMono', fontSize: 30 }
          }}
        />
        <Stack.Screen
          name="NewCollectionForm"
          component={NewCollectionForm}
          options={{
            title: "Create new collection",
            headerStyle: { backgroundColor: "#B8860B", height: 100 },
            headerTitleStyle: { fontFamily: 'SyneMono', fontSize: 19 }
          }}
        />
        <Stack.Screen
          name="CollectionList"
          component={CollectionList}
          options={{
            title: "Collection List",
            headerStyle: { backgroundColor: "#B8860B", height: 100 },
            headerTitleStyle: { fontFamily: 'SyneMono', fontSize: 25 }
          }}
        />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={({ route }) => ({
            title: route.params.collectionName,
            headerStyle: { backgroundColor: "#B8860B", height: 100 },
            headerTitleStyle: { fontFamily: 'SyneMono', fontSize: 30 }
          })}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={({ route }) => ({
            title: route.params.collectionName,
            headerStyle: { backgroundColor: "#B8860B", height: 100 },
            headerTitleStyle: { fontFamily: 'SyneMono', fontSize: 30 }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
