import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RouteKey} from "../types/navigator.ts";
import {TodoList} from "../screens/TodoList.tsx";

const Stack = createNativeStackNavigator();
export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={RouteKey.TodoList} component={TodoList}/>
    </Stack.Navigator>
  );
}
