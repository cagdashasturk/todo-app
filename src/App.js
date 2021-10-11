import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ToDoItem from './components/ToDoItem';

const App = () => {
  const [todoList, setToDoList] = useState([
    {title: 'cagdas', isDone: true},
    {title: 'cagdas', isDone: false},
  ]);
  const [text, setText] = useState('');

  const renderToDoItem = ({item, index}) => (
    <ToDoItem
      todo={item}
      onPress={() => {
        const temporaryList = [...todoList];
        temporaryList[index].isDone = !temporaryList[index].isDone;
        setToDoList(temporaryList);
      }}
      longPress={() => setToDoList(todoList.filter(todo => todo !== item))}
    />
  );

  const addItem = () => {
    setText('');
    if (!text.trim()) {
      Alert.alert('bos text girilemez');
      return;
    }
    setToDoList([...todoList, {title: text, isDone: false}]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Yapilacaklar</Text>
        <Text style={styles.header_text}>{todoList.length}</Text>
      </View>
      <FlatList data={todoList} renderItem={renderToDoItem} />
      <View style={styles.add_item_container}>
        <TextInput value={text} onChangeText={text => setText(text)} />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001219',
    padding: 12,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 20,
  },
  add_item_container: {
    backgroundColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button: {
    padding: 12,
    backgroundColor: '#00b4d8',
  },
});
