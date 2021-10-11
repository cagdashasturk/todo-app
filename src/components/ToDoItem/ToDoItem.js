import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ToDoItem.style';

const ToDoItem = ({todo, onPress, longPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={longPress}
      style={[styles.container, todo.isDone && {backgroundColor: 'gray'}]}>
      <Text style={styles.title}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

export default ToDoItem;
