import { useState, useContext } from 'react';
import styled from "styled-components/native";
import { Text } from "../../../components/Text";
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { PostsContext } from '../../../services/posts/posts.context';
import { formatDate } from '../../../utils/helpers';

const PostEditContainer = styled.View`
  padding: ${({theme}) => theme.space.medium}px;
`;

 export const PostEdit = ({route, navigation}: {route: any, navigation: any}) => {
  const { post } = route.params;
  const [text, setText] = useState(post.content);
  const [isPrivate, setIsPrivate] = useState(post.isPrivate);
  const { updatePost } = useContext(PostsContext);

  return (
    <PostEditContainer>
      <Text variant="title">
        Edit post from
      </Text>
      <Text>
        {formatDate(post.createdAt, { 
          weekday: "short", month: "short", day: "2-digit", year: "numeric" 
        })} - {formatDate(post.createdAt, { hour: '2-digit', minute: '2-digit' })}
      </Text>
      <TextInput
        editable
        multiline
        numberOfLines={13}
        onChangeText={text => setText(text)}
        value={text}
        style={{ marginTop: 20, height: 300 }}
        dense={false}
        contentStyle={{ paddingTop: 10, paddingBottom: 10}}
      />
      <Checkbox.Item
        status={isPrivate ? 'unchecked' : 'checked'}
        onPress={() => setIsPrivate(!isPrivate)}
        label='Make Public'
        style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'flex-start'}}
        labelStyle={{ flexShrink: 0, flexGrow: 0 }}
        position='leading'
      />
      <Button
        mode={'contained'} 
        onPress={() => { 
          updatePost({ID: post.ID, isPrivate, content: text});
          navigation.navigate("Post Display")
        }}
      >
        Update Post
      </Button>
    </PostEditContainer>
  )
 };