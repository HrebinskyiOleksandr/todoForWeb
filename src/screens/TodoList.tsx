import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTodoStore } from "../store/todoStore.ts";
import { PrimaryButton } from "../components/PrimaryButton.tsx";
import { TodoItem } from "../components/TodoItem.tsx";
import { useNavigation } from "@react-navigation/native";
import { RouteKey } from "../types/navigator.ts";

export const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore((state) => state);
  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);
  const navigation = useNavigation();

  console.log("Todos in TodoList:", todos);

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: 'lightgray', padding: 10, marginBottom: 5 }}>
      <TodoItem
        id={item.id}
        title={item.title}
        description={item.description}
        completed={item.completed}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Todos</Text>
      <FlatList
        data={activeTodos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.title}>Completed Todos</Text>
      <FlatList
        data={completedTodos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <PrimaryButton title="Create Todo" onPress={() => navigation.navigate(RouteKey.CreateTodo)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
