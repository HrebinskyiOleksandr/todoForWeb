import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RouteKey} from "../types/navigator.ts";
import {TodoList} from "../screens/TodoList.tsx";
import {CreateTodo} from "../screens/CreateTodo.tsx";
import {Todo} from "../screens/Todo.tsx";

const Stack = createNativeStackNavigator();
export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='TodoList'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={RouteKey.TodoList} component={TodoList}/>
      <Stack.Screen name={RouteKey.CreateTodo} component={CreateTodo}/>
      <Stack.Screen name={RouteKey.Todo} component={Todo}/>
    </Stack.Navigator>
  );
}
