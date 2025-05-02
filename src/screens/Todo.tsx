import React, { useEffect, useState } from 'react';
import { TextInput, Button, View, StyleSheet, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTodoStore } from '../store/todoStore.ts';
import {PrimaryButton} from "../components/PrimaryButton.tsx";
import {PrimaryInput} from "../components/PrimaryInput.tsx";

export const Todo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number };
  const todo = useTodoStore((state) => state.todos.find((t) => t.id === id));
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleUpdate = () => {
    updateTodo(id, title, description);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <PrimaryInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      <PrimaryInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={styles.input}
      />
      <PrimaryButton title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
