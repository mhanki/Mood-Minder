import { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { Text } from '../../../components/Text';
import { ActivityIndicator, Card, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { SafeArea } from "../../../components/SafeArea";
import { PostsContext } from '../../../services/posts/posts.context';

const formatDate = (date: string, options?: Intl.DateTimeFormatOptions | undefined) => 
  new Date(date)
    .toLocaleString('en-us', options);

const PaddedSafeArea = styled(SafeArea)`
  padding: ${({theme}) => theme.space.medium}px;
`;

const PaddedText = styled(Text)`
  padding-bottom: ${({theme}) => theme.space.small}px;
`;

const PostDisplayCard = styled(Card)`
  height: 320px;
`;

const PostContainer = styled.ScrollView`
  padding: ${({theme}) => theme.space.big}px;
`;

export const JournalScreen = () => {
  const { posts } = useContext(PostsContext);

  if(!posts) {
    return <ActivityIndicator />
  };

  const [post, setPost] = useState(posts[posts.length - 1]);

  const getIcon = (): keyof typeof Ionicons.glyphMap => post.isPrivate ? 'lock-closed-outline' : 'lock-open-outline'

  return (   
    <PaddedSafeArea>
      <PostDisplayCard>
        <PostContainer>
          <PaddedText variant="title">
            {formatDate(post.createdAt, { weekday: "short" ,month: "short", day: "2-digit", year: "numeric" })}
          </PaddedText>
          <Ionicons 
              name={getIcon()}
              size={15}
            />
          <PaddedText variant="caption">
            {formatDate(post.createdAt, { hour: '2-digit', minute: '2-digit' })}
          </PaddedText>
          <Text>{post.content}</Text>
        </PostContainer>
      </PostDisplayCard>

      <Button mode={'contained'} style={{ alignSelf: 'flex-end' }}>New Entry</Button>
    </PaddedSafeArea>
  );
};