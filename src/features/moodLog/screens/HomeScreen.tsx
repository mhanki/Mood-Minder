import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header, NavOptionsContainer, Card } from './HomeScreen.styles';
import { SafeArea } from "../../../components/SafeArea";
import { Text } from "../../../components/Text";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeArea>
      <Header>
        <Text variant="heading">Hello Emma,</Text>
        <Text variant="title">What do you want to do?</Text>
      </Header>
      <NavOptionsContainer>
        <TouchableOpacity onPress={() => { navigation.navigate("Log")}}>
          <Card>
            <Ionicons 
              name={"happy-outline"} 
              size={50} 
              color={"white"} 
            />
            <Text>Mood Log</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Journal")}}>
          <Card>
            <Ionicons 
              name={"journal-outline"} 
              size={50} 
              color={"white"} 
            />
            <Text>Journal</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Graph")}}>
          <Card>
            <Ionicons 
              name={"analytics-outline"} 
              size={50} 
              color={"white"} 
            />
            <Text>Mood Graph</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Environments")}}>
          <Card>
            <Ionicons 
              name={"pie-chart-outline"} 
              size={50} 
              color={"white"} 
            />
            <Text>Statistics</Text>
          </Card>
        </TouchableOpacity>
      </NavOptionsContainer>
    </SafeArea>
  );
};