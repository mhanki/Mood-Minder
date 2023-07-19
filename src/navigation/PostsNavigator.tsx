import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets
} from "@react-navigation/stack";
import { useContext } from "react";
import { PostsContext } from "../services/posts/posts.context";
import { PostForm } from "../features/journal/components/PostForm";
import { JournalScreen } from "../features/journal/screens/JournalScreen";
import { PostEdit } from "../features/journal/components/PostEdit";


const PostsStack = createStackNavigator();

export const PostsNavigator = () => {
  const { posts } = useContext(PostsContext);

  return (
    <PostsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={posts?.length === 0 ? 'Post Form' : 'Post Display'}
    >
      <PostsStack.Screen
        name="Post Display"
        component={JournalScreen}
      />
      <PostsStack.Screen
        name="Post Form"
        component={PostForm}
      />
      <PostsStack.Screen
        name="Post Edit"
        component={PostEdit}
        options={{ ...TransitionPresets.ModalPresentationIOS }}
      />
    </PostsStack.Navigator>
  )
}