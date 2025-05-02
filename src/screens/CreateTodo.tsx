import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {useTodoStore} from "../store/todoStore.ts";
import {PrimaryButton} from "../components/PrimaryButton.tsx";
import {PrimaryInput} from "../components/PrimaryInput.tsx";
import {useNavigation} from "@react-navigation/native";
import {RouteKey} from "../types/navigator.ts";

interface TodoCreateFormData {
  title: string;
  description: string;
}

export const CreateTodo: React.FC = () => {
  const { control, handleSubmit, reset,watch } = useForm<TodoCreateFormData>({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const navigation = useNavigation();
  const addTodo = useTodoStore(state => state.addTodo);

  const title = watch('title');
  const description = watch('description');
  const onSubmit = (data: TodoCreateFormData) => {
    if (!data.title.trim()) return;
    addTodo(data.title.trim(), data.description.trim());
    reset();
    navigation.navigate(RouteKey.TodoList)
  };

  const isButtonDisabled = !title.trim() || !description.trim();

  return (
      <View style={styles.container}>
        <Controller
          control={control}
          name="title"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <PrimaryInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter todo title"
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <PrimaryInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter description"
              multiline
              numberOfLines={4}
              style={styles.textArea}
            />
          )}
        />
        <PrimaryButton title="Add" onPress={handleSubmit(onSubmit)} disabled={isButtonDisabled}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
