import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header, NavOptionsContainer, Card } from './HomeScreen.styles';
import { SafeArea } from "../../../components/SafeArea";
import { Text } from "../../../components/Text";
import { colors } from '../../../theme/colors';
import { useContext } from 'react';
import { AuthenticationContext } from '../../../services/auth/auth.context';

export const HomeScreen = ({ navigation }: any) => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Header>
        <View>
          <Text variant="heading">Hello <Text variant="heading" style={{ color: colors.bg.secondary }}>Jane</Text>,</Text>
          <Text variant="title">What do you want to do?</Text>
        </View>
        <TouchableOpacity
          style={{ marginLeft: "auto" }}
          onPress={() => { onLogout(); }}
        >
          <Ionicons
            name={"cog-outline"}
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
      </Header>
      <NavOptionsContainer>
        <TouchableOpacity onPress={() => { navigation.navigate("Log"); }}>
          <Card>
            <Ionicons
              name={"happy-outline"}
              size={50}
              color={"white"}
              marginBottom={5}
            />
            <Text>Log Mood</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Journal"); }}>
          <Card>
            <Ionicons
              name={"journal-outline"}
              size={50}
              color={"white"}
              marginBottom={5}
            />
            <Text>Journal</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Graph"); }}>
          <Card>
            <Ionicons
              name={"analytics-outline"}
              size={50}
              color={"white"}
              marginBottom={5}
            />
            <Text>View Graph</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Environments"); }}>
          <Card>
            <Ionicons
              name={"pie-chart-outline"}
              size={50}
              color={"white"}
              marginBottom={5}
            />
            <Text>See Statistics</Text>
          </Card>
        </TouchableOpacity>
      </NavOptionsContainer>
    </SafeArea>
  );
};