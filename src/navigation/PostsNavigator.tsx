import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { PostForm } from "../features/journal/components/PostForm";
import { JournalScreen } from "../features/journal/screens/JournalScreen";

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
    </PostsStack.Navigator>
  )
}