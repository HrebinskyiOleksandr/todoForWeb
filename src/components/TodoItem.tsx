import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

interface Props {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  onPress: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({
  id,
  title,
  description,
  completed,
  toggleTodo,
  deleteTodo,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => toggleTodo(id)} style={styles.checkbox}>
        <Text>{completed ? '✅' : '⬜️'}</Text>
      </Pressable>

      <Pressable onPress={() => onPress(id)} style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </Pressable>

      <Pressable onPress={() => deleteTodo(id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑️</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    gap: 10,
  },
  checkbox: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    padding: 4,
  },
  deleteText: {
    color: 'red',
    fontSize: 18,
  },
});
