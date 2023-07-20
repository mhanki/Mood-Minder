import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets
} from "@react-navigation/stack";
import { useContext } from "react";
import { PostsContext } from "../services/posts/posts.context";
import { JournalForm } from "../features/journal/components/JournalForm";
import { JournalScreen } from "../features/journal/screens/JournalScreen";
import { JournalEdit } from "../features/journal/components/JournalEdit";


const PostsStack = createStackNavigator();

export const JournalNavigator = () => {
  const { posts } = useContext(PostsContext);

  return (
    <PostsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={posts?.length === 0 ? 'Journal Form' : 'Journal Display'}
    >
      <PostsStack.Screen
        name="Journal Display"
        component={JournalScreen}
      />
      <PostsStack.Screen
        name="Journal Form"
        component={JournalForm}
      />
      <PostsStack.Screen
        name="Journal Edit"
        component={JournalEdit}
        options={{ ...TransitionPresets.ModalPresentationIOS }}
      />
    </PostsStack.Navigator>
  )
}