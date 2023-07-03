import { useContext } from 'react';
import { 
  PaddedSafeArea, 
  RowContainer, 
  TitleContainer, 
  PostDisplayCard, 
  PostContainer 
} from './JournalScreen.styles';
import { Text } from '../../../components/Text';
import { TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { PostsContext } from '../../../services/posts/posts.context';
import { formatDate } from '../../../utils/helpers';
import { colors } from '../../../theme/colors';


export const JournalScreen = ({ navigation }:  { navigation: any }) => {
  const { posts, displayedPost, browsePosts } = useContext(PostsContext);

  if(!posts || !displayedPost) {
    return (
      <PaddedSafeArea>
        <ActivityIndicator/>
      </PaddedSafeArea>
    )
  };

  const getIcon = (): keyof typeof Ionicons.glyphMap => displayedPost.isPrivate ? 'lock-closed-outline' : 'lock-open-outline'

  return (   
    <PaddedSafeArea>
      <TitleContainer>
        <Button onPress={() => browsePosts("prev")}>
          <Ionicons name={"chevron-back-outline"} size={25} color={colors.bg.secondary}/>
        </Button>
        <Text variant="title">
          {formatDate(displayedPost.createdAt, { weekday: "short", month: "short", day: "2-digit", year: "numeric" })}
        </Text>
        <Button onPress={() => browsePosts("next")}>
          <Ionicons name={"chevron-forward-outline"} size={25} color={colors.bg.secondary}/>
        </Button>
      </TitleContainer>
      <PostDisplayCard>
        <PostContainer>
          <RowContainer>
            <Ionicons 
              name={getIcon()}
              size={15}
              color={"white"}
            />
            <Text variant="caption" style={{ marginLeft: 10 }}>
              {formatDate(displayedPost.createdAt, { hour: '2-digit', minute: '2-digit' })}
              {displayedPost.updatedAt ? ' (edited)' : null}
            </Text>
            <TouchableOpacity 
              style={{ marginLeft: 'auto' }}
              onPress={() => navigation.navigate("Post Edit", {post: displayedPost})}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons 
                  name={"create-outline"} 
                  size={15}
                  color={"white"}
                />
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
          </RowContainer>
          <Text>{displayedPost.content}</Text>
        </PostContainer>
      </PostDisplayCard>

      <Button 
        mode={'contained'} 
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Post Form")}
        buttonColor={colors.bg.secondary}
        textColor={"black"}
      >
        New Entry
      </Button>
    </PaddedSafeArea>
  );
};