import { useContext, useState } from 'react';
import { 
  PaddedSafeArea, 
  RowContainer, 
  TitleContainer, 
  PostDisplayCard, 
  PostContainer 
} from './JournalScreen.styles';
import { Text } from '../../../components/Text';
import { ActivityIndicator, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { PostsContext } from '../../../services/posts/posts.context';

const formatDate = (date: string, options?: Intl.DateTimeFormatOptions | undefined) => 
  new Date(date)
    .toLocaleString('en-us', options);

export const JournalScreen = () => {
  const { posts } = useContext(PostsContext);

  if(!posts) {
    return <ActivityIndicator />
  };

  const [displayedPost, setDisplayedPost] = useState(posts[posts.length - 1]);

  console.log(posts)

  const browsePosts = (direction: string) => {
    const i = posts.findIndex((post) => post.ID === displayedPost?.ID);
    const post = direction === 'prev'
    ? posts[i-1]
    : posts[i+1]
  
    if(post){
      setDisplayedPost(post)
    };
  };

  const getIcon = (): keyof typeof Ionicons.glyphMap => displayedPost.isPrivate ? 'lock-closed-outline' : 'lock-open-outline'

  return (   
    <PaddedSafeArea>
      <TitleContainer>
        <Button onPress={() => browsePosts("prev")}>
          <Ionicons name={"chevron-back-outline"} size={25}/>
        </Button>
        <Text variant="title">
          {formatDate(displayedPost.createdAt, { weekday: "short" ,month: "short", day: "2-digit", year: "numeric" })}
        </Text>
        <Button onPress={() => browsePosts("next")}>
          <Ionicons name={"chevron-forward-outline"} size={25}/>
        </Button>
      </TitleContainer>
      <PostDisplayCard>
        <PostContainer>
          <RowContainer>
            <Ionicons 
              name={getIcon()}
              size={15}
            />
            <Text variant="caption" style={{ marginLeft: 10 }}>
              {formatDate(displayedPost.createdAt, { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </RowContainer>
          <Text>{displayedPost.content}</Text>
        </PostContainer>
      </PostDisplayCard>

      <Button mode={'contained'} style={{ marginTop: 20 }}>New Entry</Button>
    </PaddedSafeArea>
  );
};