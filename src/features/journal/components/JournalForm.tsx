import { useState, useContext } from 'react';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import { SafeArea } from '../../../components/SafeArea';
import { PostsContext } from '../../../services/posts/posts.context';
import { colors } from '../../../theme/colors';

export const JournalForm = ({ navigation } :  { navigation: any }) => {
  const [text, setText] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const { addPost } = useContext(PostsContext);

  return (
    <SafeArea>
      <TextInput
        editable
        multiline
        numberOfLines={20}
        onChangeText={text => setText(text)}
        value={text}
        style={{ margin: 16, backgroundColor: colors.bg.lighter, color: "white" }}
        contentStyle={{ color: "white" }}
        placeholder={"How are you doing today?"}
        placeholderTextColor={"white"}
      />
      <Checkbox.Item
        status={isPrivate ? 'unchecked' : 'checked'}
        onPress={() => setIsPrivate(!isPrivate)}
        label='Make Public'
        style={{ paddingHorizontal: 16, paddingVertical: 0, justifyContent: 'flex-start'}}
        labelStyle={{ flexShrink: 0, flexGrow: 0, color: 'white' }}
        position='leading'
        color={colors.bg.secondary}
      />
      <Button
        mode={'contained'} 
        style={{ marginTop: 10 }}
        onPress={() => { 
          addPost({ content: text, isPrivate }) 
          navigation.navigate("Post Display")
        }}
        buttonColor={colors.bg.secondary}
        textColor={"black"}
      >
        Add Post
      </Button>
    </SafeArea>
  )
}