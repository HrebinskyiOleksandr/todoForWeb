import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TodoItemProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, completed, toggleTodo, deleteTodo }) => {
  return (
    <View style={[styles.todoItem, completed && styles.completed]}>
      <TouchableOpacity onPress={() => toggleTodo(id)} style={styles.checkbox}>
        {completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <View style={styles.todoContent}>
        <Text style={[styles.todoText, completed && styles.strikethrough]}>{title}</Text>
        <Text style={styles.todoDescription}>{description}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTodo(id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 14,
    color: '#000',
  },
  todoContent: {
    flex: 1,
    marginLeft: 8,
  },
  todoText: {
    fontSize: 16,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  todoDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  delete: {
    color: 'red',
    fontSize: 14,
  },
});
