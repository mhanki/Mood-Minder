import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets
} from "@react-navigation/stack";
import { PostForm } from "../features/journal/components/PostForm";
import { JournalScreen } from "../features/journal/screens/JournalScreen";
import { PostEdit } from "../features/journal/components/PostEdit";

const PostsStack = createStackNavigator();

export const PostsNavigator = () => {
  return (
    <PostsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
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