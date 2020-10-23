import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
const { state , deleteBlogPost, getBlogPosts } = useContext(Context);

useEffect(() => {
  getBlogPosts();

  const listener = navigation.addListener('didFocus', () => {
    getBlogPosts();
  })
  
  return () => {
    listener.remove();
  };
}, []);

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={key => key.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name='trash' style={styles.icon} />
                </TouchableOpacity>
                </View>
            </TouchableOpacity>
            )
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () =>{ 
     return (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name='plus' size={30}/>
        </TouchableOpacity>
     )}
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  }
});

export default IndexScreen;
