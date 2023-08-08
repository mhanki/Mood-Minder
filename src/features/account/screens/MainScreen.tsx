import {
  AccountContainer,
  AccountButton
} from "../components/Account.styles";
import { Text } from "../../../components/Text";
import { SafeArea } from "../../../components/SafeArea";

export const MainScreen = ({navigation}: any) => {
  return (
    <SafeArea>
      <Text variant="heading">Mood Minder</Text>
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          >
          Login
          </AccountButton>
          <AccountButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
        </AccountButton>
      </AccountContainer>
    </SafeArea>
  );
};