import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTodoStore } from '../store/todoStore.ts';

export const Todo = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const todo = useTodoStore(state => state.todos.find(t => t.id === id));

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text>Todo not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Todo</Text>
      <Text>ID: {todo.id}</Text>
      <Text>Title: {todo.title}</Text>
      <Text>Description: {todo.description}</Text>
      <Text>Status: {todo.completed ? 'Completed' : 'Active'}</Text>
      {/* Додай форму для редагування за потреби */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
