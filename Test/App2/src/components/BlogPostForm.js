import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({onSubmit, initialValues = '' }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  
  return(
       <View>
        <Text style={styles.label}> Title </Text>
        <TextInput 
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.label}> Content </Text>
        <TextInput 
          style={styles.input}
          value={content} 
          onChangeText={(content) => setContent(content)}/>
        <Button 
          title='Save'
          onPress={() => onSubmit(title, content)}
          />
    </View>
  );
}
// You can use this to create specific default props for a component if writing them in-line doesn't work.
// BlogPostForm.defaultProps = {
//   initialValues: {
//     title: '',
//     content: '',
//   }
// }

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  }
});

export default BlogPostForm;
