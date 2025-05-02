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
  onPress
}) => {
  return (
    <Pressable onPress={() => onPress(id)} style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>Status: {completed ? 'Completed' : 'Active'}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
