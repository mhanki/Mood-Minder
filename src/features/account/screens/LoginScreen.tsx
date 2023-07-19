import { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer
} from "../components/Account.styles";
import { Text } from "../../../components/Text";
import { SafeArea } from "../../../components/SafeArea";
import { AuthenticationContext } from "../../../services/auth/auth.context";

export const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text variant="heading">Log In</Text>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            onLogin(email, password);
          }}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </SafeArea>
  );
};