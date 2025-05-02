import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  const renderItem = (item) => (
    <View key={item.id} style={{ backgroundColor: 'lightgray', padding: 10, marginBottom: 5 }}>
      <TodoItem
        id={item.id}
        title={item.title}
        description={item.description}
        completed={item.completed}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        onPress={(id) => navigation.navigate(RouteKey.Todo, { id })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Todos</Text>
      {activeTodos.length === 0 ? (
        <Text>No active todos</Text>
      ) : (
        activeTodos.map((todo) => renderItem(todo))
      )}

      <Text style={styles.title}>Completed Todos</Text>
      {completedTodos.length === 0 ? (
        <Text>No completed todos</Text>
      ) : (
        completedTodos.map((todo) => renderItem(todo))
      )}

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

// <FlatList
//   data={completedTodos}
//   renderItem={renderItem}
//   keyExtractor={(item) => item.id}
// />
